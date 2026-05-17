---
title: "Dispersion as a Consequence of Discrete Space-Time"
date: 2024-09-10
math: true
tags: ["physics", "spacetime", "dispersion", "condensed matter"]
summary: "How dispersion emerges naturally from a granular spacetime model — deriving dispersion relations from coupled oscillators on a lattice."
cover:
  image: /images/posts/dispersion/hero.webp
  alt: "Discrete harmonic oscillators"
---

![Connected discrete harmonic oscillators](/images/posts/dispersion/hero.webp)

This article explains how dispersion emerges from a granular spacetime model. Following Prof. Ulf Leonhardt's framework, spacetime operates as a lattice structure where neighboring nodes interact as harmonic oscillators — mirroring condensed matter physics, similar to the Ising model where only neighboring points interact.

---

## Part One — Composite Harmonic Oscillator

Starting with a simple harmonic oscillator equation, the derivation extends to coupled oscillators where displacement depends on nearest neighbors.

![Oscillator diagram](/images/posts/dispersion/oscillator-diagram.jpg)

![](/images/posts/dispersion/eq1.png)

![](/images/posts/dispersion/eq2.png)

The analysis combines equations for $Y_{i-1}$ and $Y_{i+1}$ influences on $Y_i$ to create a composite equation.

![](/images/posts/dispersion/eq3.png)

![](/images/posts/dispersion/eq4.png)

![](/images/posts/dispersion/eq5.png)

---

## Part Two — Taylor Expansion

Taylor expansions of $Y_{i-1}$ and $Y_{i+1}$ around $Y_i$ with respect to time, where $\delta$ represents the spacing between nodes.

![](/images/posts/dispersion/eq6.png)

![](/images/posts/dispersion/eq7.png)

Only even-order terms survive when summing the series. The second derivative corresponds to standard wave equations; fourth derivatives account for dispersive medium corrections.

![](/images/posts/dispersion/eq8.png)

![](/images/posts/dispersion/eq9.png)

![](/images/posts/dispersion/eq10.png)

![](/images/posts/dispersion/eq11.png)

---

## Part Three — Dispersive Term Derivation

A plane wave solution is assumed:

$$y = A e^{i(kx - \omega t)}$$

![](/images/posts/dispersion/eq12.png)

![](/images/posts/dispersion/eq13.png)

![](/images/posts/dispersion/eq14.png)

Subsequent derivatives are calculated and substituted into the composite equation.

![](/images/posts/dispersion/eq15.png)

![](/images/posts/dispersion/eq16.png)

![](/images/posts/dispersion/eq17.png)

Through algebraic simplification, the dispersion relation emerges:

$$\omega^2 = \frac{(4Z/m)\sin^2(k\delta/2)}{1 + (Z\delta^2/m)\sin^2(k\delta/2)}$$

![](/images/posts/dispersion/eq18.png)

![](/images/posts/dispersion/eq19.png)

![](/images/posts/dispersion/eq20.png)

This shows frequency-dependent wavenumber behavior characteristic of dispersive media.

![](/images/posts/dispersion/eq21.png)

![](/images/posts/dispersion/eq22.png)

---

## Concluding Remarks

![](/images/posts/dispersion/board.jpg)

Dispersion naturally arises from discrete lattice structures without requiring external analogies. Bose–Einstein condensates exhibit positive dispersion (versus negative in standard oscillator systems), suggesting they behave like oscillators with purely imaginary distances.

![](/images/posts/dispersion/eq23.png)

![](/images/posts/dispersion/eq24.png)

Dispersion can be understood as something far more fundamental — a direct consequence of the granular structure of spacetime itself.
