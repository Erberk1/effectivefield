#!/usr/bin/env node
// Encrypt a file with AES-256-GCM using a PBKDF2-derived key.
// Output format (binary):  salt(16) || iv(12) || ciphertext+GCMtag
// Decryptable in any browser via WebCrypto with the same parameters.
//
// Usage:
//   node tools/encrypt.mjs <inputFile> <outputFile>
// The passphrase is read from the PASSPHRASE env var, or prompted (hidden).

import { webcrypto as crypto } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { createInterface } from 'node:readline';

const PBKDF2_ITER = 250000;

function promptHidden(question) {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    const stdin = process.stdin;
    const onData = (char) => {
      const s = char.toString();
      if (s === '\n' || s === '\r' || s === '') {
        stdin.removeListener('data', onData);
      } else {
        process.stdout.write('\x1b[2K\x1b[200D' + question + '*'.repeat(rl.line.length));
      }
    };
    stdin.on('data', onData);
    rl.question(question, (answer) => { rl.close(); process.stdout.write('\n'); resolve(answer); });
  });
}

async function main() {
  const [, , inPath, outPath] = process.argv;
  if (!inPath || !outPath) {
    console.error('Usage: node tools/encrypt.mjs <inputFile> <outputFile>');
    process.exit(1);
  }

  let passphrase = process.env.PASSPHRASE;
  if (!passphrase) passphrase = await promptHidden('Passphrase: ');
  if (!passphrase || passphrase.length < 12) {
    console.error('Passphrase must be at least 12 characters.');
    process.exit(1);
  }

  const data = await readFile(inPath);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));

  const baseKey = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(passphrase), 'PBKDF2', false, ['deriveKey']
  );
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITER, hash: 'SHA-256' },
    baseKey, { name: 'AES-GCM', length: 256 }, false, ['encrypt']
  );

  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, data));

  const out = new Uint8Array(salt.length + iv.length + ct.length);
  out.set(salt, 0);
  out.set(iv, salt.length);
  out.set(ct, salt.length + iv.length);

  await writeFile(outPath, out);
  console.log(`Encrypted ${inPath} -> ${outPath} (${out.length} bytes, ${PBKDF2_ITER} PBKDF2 iters)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
