---
title: "Fluctuation-Dissipation Theorem"
date: 2025-03-02
math: true
tags: ["quantum optics", "physics", "thermodynamics"]
summary: "From Einstein's 1905 Brownian motion to quantum vacuum fluctuations and the Lindblad equation."
---

## Introduction

In 1905, Einstein formulated how atomic motion causes both friction and fluctuations in Brownian motion, establishing the deep connection between dissipation and fluctuations.

![](/images/posts/fluctuation-dissipation/fig1.png)

![](/images/posts/fluctuation-dissipation/fig2.png)

The fluctuation-dissipation theorem tells us that any system which dissipates energy must also exhibit fluctuations — and the two are quantitatively related.

---

## Quantum Perspective

Quantum fluctuations differ fundamentally from classical ones. Vacuum fluctuations arise through the Heisenberg uncertainty relations and field operator decomposition.

![](/images/posts/fluctuation-dissipation/fig3.png)

![](/images/posts/fluctuation-dissipation/fig4.png)

![](/images/posts/fluctuation-dissipation/fig5.png)

Even in the vacuum state — what we might naively call "empty space" — quantum fields exhibit irreducible fluctuations.

---

## Experimental Evidence

An ETH Zurich experiment by Jaquil Feist used nonlinear crystals at near-absolute-zero temperatures to demonstrate vacuum noise effects on light polarization.

![](/images/posts/fluctuation-dissipation/fig6.png)

![](/images/posts/fluctuation-dissipation/fig7.png)

![](/images/posts/fluctuation-dissipation/fig8.png)

---

## Quantum Optics Applications

### Absorption

The output amplitude for absorption:

$$B = \sqrt{1 - \eta}\, A + \sqrt{\eta}\, A_0$$

![](/images/posts/fluctuation-dissipation/fig9.png)

![](/images/posts/fluctuation-dissipation/fig10.png)

### Amplification

$$B = G\, A + \sqrt{G - 1}\, A_0$$

where $G$ is the gain factor.

![](/images/posts/fluctuation-dissipation/fig11.png)

![](/images/posts/fluctuation-dissipation/fig12.png)

![](/images/posts/fluctuation-dissipation/fig13.png)

![](/images/posts/fluctuation-dissipation/fig14.png)

---

## Lindblad Equation

The master equation for density matrix evolution, incorporating irreversible processes through jump operators:

![](/images/posts/fluctuation-dissipation/fig15.png)

![](/images/posts/fluctuation-dissipation/fig16.png)

![](/images/posts/fluctuation-dissipation/fig17.png)

![](/images/posts/fluctuation-dissipation/fig18.png)

---

## Conclusion

Photon absorption statistics follow binomial distributions, connecting the quantum formalism back to classical probability.

![](/images/posts/fluctuation-dissipation/photo1.jpeg)

![](/images/posts/fluctuation-dissipation/photo2.jpeg)

![](/images/posts/fluctuation-dissipation/fig19.png)

---

## References

1. Einstein, A. (1905). *Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen.* Annalen der Physik, 17(8), 549–560.
2. Lindblad, G. (1976). *On the generators of quantum dynamical semigroups.* Communications in Mathematical Physics, 48(2), 119–130.
3. Leonhardt, U. (2010). *Essential Quantum Optics: From Quantum Measurements to Black Holes.* Cambridge University Press.
