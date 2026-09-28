---
title: "Fermi's Pisa"
date: 2026-09-28
math: true
showToc: false
tags: ["Enrico Fermi", "Pisa", "history", "physics"]
summary: "A visit to the Scuola Normale Superiore, Fermi’s handwritten entrance examinations, and the mathematics of a vibrating rod."
---

{{< fermi-photo src="/images/posts/fermis-pisa/fermi-portrait-preview.webp" width="750" height="1000" full="/images/posts/fermis-pisa/fermi-portrait.webp" alt="Photograph of a mounted black-and-white portrait of Enrico Fermi" caption="Enrico Fermi. A portrait photographed during my visit to the Scuola Normale Superiore." class="fermi-photo--hero" loading="eager" >}}

Enrico Fermi is the best Italian physicist of the 20th century and is widely known for his work in nuclear physics. He began bombarding nuclei with neutrons in Rome and later settled at the University of Chicago after the war, where he worked until his death in 1954. Besides being a Quantum pioneer, he was one of the leading physicists in the Manhattan Project. And he is immortalized in the minds of young physicists through the name of Fermions- subatomic particles with half integer spin.

I first learned about Fermi as a 13-year-old from the book 50 Best Ideas in Physics. One of these was the Fermi paradox, the argument that evidence of extraterrestrial intelligence should be apparent because the universe is so vast and old. Obviously, Fermi knew about relativity, so the paradox can't simply be resolved by the possibility of aliens outside our light cone, since even sub-relativistic travel could provide more than enough time to colonize our own galaxy.

And, as the aforementioned paradox illustrates, Fermi is known for his predictive skills on the fly, which rely on order-of-magnitude estimation. Another legendary example is how he estimated the strength of the first atomic bomb, nicknamed The Gadget. He did so by dropping several small pieces of paper and measuring how far the blast wind displaced them. His result of 10 kilotons of TNT was of the same order of magnitude as the [later estimate of about 25 kilotons](https://arxiv.org/abs/2103.05784). This kind of estimation is a powerful tool for a physicist and reflects the strong physical intuition of people who do it well. Whether in Quantum Mechanics or in General Relativity, order-of-magnitude estimation has been the messenger of great discoveries, with the dimensional estimate behind the [proposed power bound associated with Dyson](https://arxiv.org/abs/2105.06650) being a good example at today's frontier.

My fascination with Fermi grew when I read The Pope of Physics as a high schooler and learned about his intellectual upbringing in Pisa at the Scuola Normale Superiore, to be specific.

Pisa can be considered the birthplace of modern physics, thanks to Galileo. He was one of the pioneering European scientists to combine rigorous mathematical underpinnings with observational methods, paving the way for all theoreticians today. Not only did he conduct experiments with falling objects, [reportedly from the famous Leaning Tower of Pisa](https://brunelleschi.imss.fi.it/itineraries/pdf/GalileoBiography.pdf#page=22), and formulate the principle of relativity, but he also made discoveries, as in the case of Jupiter's moons.

{{< fermi-photo src="/images/posts/fermis-pisa/leaning-tower-preview.webp" width="750" height="1000" full="/images/posts/fermis-pisa/leaning-tower.webp" alt="The Leaning Tower of Pisa beside the cathedral, with sunlight coming through the tower’s lower arches" caption="The Leaning Tower of Pisa and the cathedral." >}}

And over the centuries, Pisa remained an intellectual hub of Italian physics, where prominent scholars studied up until the 19th century. Then, following Napoleon's conquest of Tuscany, the Scuola Normale Superiore was established in 1810. Much like its twin, the École Normale Supérieure in Paris, it is a highly selective, intimate institution where the country's best students are chosen through a rigorous entrance exam to learn in an intensely challenging environment. A 17-year-old Enrico Fermi took this very exam in 1918. For the essay section on the characteristics of sound, Fermi derived the partial differential equation for a vibrating rod rather than writing a standard descriptive answer. He then continued with Fourier analysis, showing a mathematical maturity far beyond his age and leaving his examiner, Giulio Pittarelli, astounded.

Over the years, I have heard the legend of this derivation, so below I work through it, starting from the photo I personally took of the essay's first page.

{{< fermi-photo src="/images/posts/fermis-pisa/physics-exam-preview.webp" width="709" height="1000" full="/images/posts/fermis-pisa/physics-exam.webp" alt="Fermi's handwritten physics examination headed 14 November 1918, on the characteristics of sound" caption="The physics entrance examination, 14 November 1918." class="fermi-photo--manuscript" >}}

We limit our focus to the small transverse vibrations of a uniform elastic rod clamped at one end and free at the other. The governing partial differential equation is

<div class="fermi-equation">
$$
\frac{\partial^2 y}{\partial t^2} + a^2 \frac{\partial^4 y}{\partial x^4} = 0
$$
</div>

where <span class="fermi-inline-math">$y(x,t)$</span> is the transverse displacement, and the stiffness parameter is defined as

<div class="fermi-equation">
$$
a^2 = \frac{EI}{m}
$$
</div>

with <span class="fermi-inline-math">$E$</span> representing the modulus of elasticity, <span class="fermi-inline-math">$I$</span> the area moment of inertia of the cross-section, and <span class="fermi-inline-math">$m$</span> the mass per unit length. Applying separation of variables, we expand the sine component of the displacement into a sum of spatial modes <span class="fermi-inline-math">$u(x)$</span> and temporal harmonics oscillating at angular frequencies <span class="fermi-inline-math">$k$</span>:

<div class="fermi-equation">
$$
y(x,t) = \sum u(x) \sin(kt)
$$
</div>

Taking the second partial derivative with respect to time and the fourth with respect to space yields

<div class="fermi-equation">
$$
\begin{aligned}
\frac{\partial^2 y}{\partial t^2} &= -\sum k^2 u \sin(kt) \\
\frac{\partial^4 y}{\partial x^4} &= \sum \frac{d^4 u}{dx^4} \sin(kt)
\end{aligned}
$$
</div>

Substituting these back into the wave equation shows that the spatial profile <span class="fermi-inline-math">$u(x)$</span> of each mode must satisfy the fourth-order ordinary differential equation

<div class="fermi-equation">
$$
\frac{d^4 u}{dx^4} - \beta^4 u = 0
$$
</div>

where the spatial parameter is defined by <span class="fermi-inline-math">$\beta^4 = \frac{k^2}{a^2}$</span>. The roots of the characteristic equation <span class="fermi-inline-math">$r^4 - \beta^4 = 0$</span> are <span class="fermi-inline-math">$\pm \beta$</span> and <span class="fermi-inline-math">$\pm i\beta$</span>, producing the general solution for the spatial mode:

<div class="fermi-equation">
$$
\begin{aligned}
u(x) ={}& C_1 \cosh(\beta x) + C_2 \sinh(\beta x) \\
&+ C_3 \cos(\beta x) + C_4 \sin(\beta x)
\end{aligned}
$$
</div>

We apply the boundary conditions for the cantilevered rod. At the clamped base (<span class="fermi-inline-math">$x = 0$</span>), both the displacement and slope must be zero:

<div class="fermi-equation">
$$
\begin{aligned}
u(0) = 0, &\quad C_1 + C_3 = 0, \\
&\quad C_3 = -C_1 \\[4pt]
u'(0) = 0, &\quad \beta (C_2 + C_4) = 0, \\
&\quad C_4 = -C_2
\end{aligned}
$$
</div>

This leaves two unknown coefficients in the spatial profile:

<div class="fermi-equation">
$$
\begin{aligned}
u(x) ={}& C_1 (\cosh(\beta x) - \cos(\beta x)) \\
&+ C_2 (\sinh(\beta x) - \sin(\beta x))
\end{aligned}
$$
</div>

At the free tip of the rod (<span class="fermi-inline-math">$x = L$</span>), the physical constraints demand that both the bending moment and the transverse shearing force be zero, meaning the second and third spatial derivatives must vanish:

<div class="fermi-equation">
$$
\begin{aligned}
u''(L) ={}& \beta^2 [ C_1 (\cosh \beta L + \cos \beta L) \\
&+ C_2 (\sinh \beta L + \sin \beta L) ] = 0 \\[6pt]
u'''(L) ={}& \beta^3 [ C_1 (\sinh \beta L - \sin \beta L) \\
&+ C_2 (\cosh \beta L + \cos \beta L) ] = 0
\end{aligned}
$$
</div>

For the rod to vibrate, <span class="fermi-inline-math">$C_1$</span> and <span class="fermi-inline-math">$C_2$</span> cannot both be zero. Therefore, the determinant of their coefficients in this linear system must equal zero:

<div class="fermi-equation">
$$
\begin{aligned}
& (\cosh(\beta L) + \cos(\beta L))^2 \\
&- (\sinh(\beta L) + \sin(\beta L)) \\
&\quad\times(\sinh(\beta L) - \sin(\beta L)) = 0
\end{aligned}
$$
</div>

Expanding this expression:

<div class="fermi-equation">
$$
\begin{aligned}
&\cosh^2(\beta L) + 2\cosh(\beta L)\cos(\beta L) \\
&+ \cos^2(\beta L) - \sinh^2(\beta L) \\
&+ \sin^2(\beta L) = 0
\end{aligned}
$$
</div>

When we apply the fundamental identities <span class="fermi-inline-math">$\cosh^2(z) - \sinh^2(z) = 1$</span> and <span class="fermi-inline-math">$\cos^2(z) + \sin^2(z) = 1$</span>, the equation collapses perfectly into a transcendental characteristic equation:

<div class="fermi-equation">
$$
\begin{aligned}
2 + 2\cosh(\beta L)\cos(\beta L) &= 0 \\
\cosh(\beta L)\cos(\beta L) + 1 &= 0
\end{aligned}
$$
</div>

Setting <span class="fermi-inline-math">$\mu = \beta L$</span>, the roots of <span class="fermi-inline-math">$\cos(\mu) = -1/\cosh(\mu)$</span> dictate the permitted eigenvalues of the rod. The first three non-zero roots are numerically evaluated as:

<div class="fermi-equation">
$$
\begin{aligned}
\mu_1 &\approx 1.875, \\
\mu_2 &\approx 4.694, \\
\mu_3 &\approx 7.855
\end{aligned}
$$
</div>

Recalling that <span class="fermi-inline-math">$\beta^4 = k^2 / a^2$</span>, the angular frequencies of the vibrating rod are given by:

<div class="fermi-equation">
$$
k_n = \frac{\mu_n^2}{L^2} \sqrt{\frac{EI}{m}}
$$
</div>

Because the frequency scales with the square of the roots, the overtones do not fall at integer multiples of the fundamental frequency, generating the characteristic inharmonic sound of a metallic bar.

{{< fermi-gallery >}}
{{< fermi-photo src="/images/posts/fermis-pisa/geometry-exam-preview.webp" width="720" height="1000" full="/images/posts/fermis-pisa/geometry-exam.webp" alt="Fermi's handwritten geometry examination with a geometric construction" caption="Geometry examination, 13 November 1918." class="fermi-photo--manuscript" >}}
{{< fermi-photo src="/images/posts/fermis-pisa/algebra-exam-preview.webp" width="737" height="1000" full="/images/posts/fermis-pisa/algebra-exam.webp" alt="Fermi's handwritten algebra examination with powers and complex numbers" caption="Algebra examination, 12 November 1918." class="fermi-photo--manuscript" >}}
{{< /fermi-gallery >}}

I am not aware of all the exam setup details, including what references Fermi had available. However, if he wrote down the fourth-order equation from memory and solved it as a 17-year-old in an exam setting, this is more than impressive, and the legend behind this essay truly deserves the hype.

{{< fermi-gallery >}}
{{< fermi-photo src="/images/posts/fermis-pisa/calculations-preview.webp" width="744" height="1000" full="/images/posts/fermis-pisa/calculations.webp" alt="A manuscript page of trigonometric expressions and numerical calculations" caption="A page of handwritten calculations among the examination papers." class="fermi-photo--manuscript" >}}
{{< fermi-photo src="/images/posts/fermis-pisa/university-document-preview.webp" width="678" height="1000" full="/images/posts/fermis-pisa/university-document.webp" alt="Handwritten document headed R. Università degli Studi di Roma" caption="A document on the headed paper of the Royal University of Rome, displayed with the examination papers." class="fermi-photo--manuscript" >}}
{{< /fermi-gallery >}}

Returning to the Scuola Normale, before Napoleon's conquest, the building was essentially a palace for noble knights training to defend against external forces, primarily the Ottomans. Today, the former school library, used as a conference room, houses historical documents from the Salviati family archive.

{{< fermi-gallery >}}
{{< fermi-photo src="/images/posts/fermis-pisa/library-preview.webp" width="750" height="1000" full="/images/posts/fermis-pisa/library.webp" alt="Wooden bookcases and a blue Scuola Normale Superiore banner" caption="Books and the Scuola’s banner inside the Palazzo della Carovana." >}}
{{< fermi-photo src="/images/posts/fermis-pisa/glass-ceiling-preview.webp" width="750" height="1000" full="/images/posts/fermis-pisa/glass-ceiling.webp" alt="A coloured glass ceiling above the interior of the Palazzo della Carovana" caption="The glass ceiling inside the Scuola." >}}
{{< /fermi-gallery >}}

As you can see here, the beautiful glass roof is surrounded by coats of arms of the families whose descendants trained in this very palace. And when you follow the stairs right up from there, you arrive at Fermi's room, which overlooks the square where the Scuola sits.

{{< fermi-photo src="/images/posts/fermis-pisa/fermi-room-preview.webp" width="750" height="1000" full="/images/posts/fermis-pisa/fermi-room.webp" alt="A corridor and doorway inside the Palazzo della Carovana" caption="A corridor inside the Palazzo della Carovana." >}}

Although physics, the crown of positive sciences, is purely objective and independent of where it is practiced, a rich intellectual spirit often inspires one to think more deeply about nature and the laws that govern it. I can see that this is certainly the case for the SNS and Pisa in general, making it entirely unsurprising that this environment fostered such greats as Galileo and Fermi.

{{< fermi-photo src="/images/posts/fermis-pisa/pisa-mural-preview.webp" width="1000" height="750" full="/images/posts/fermis-pisa/pisa-mural.webp" alt="A Pisa street mural showing Galileo looking through a telescope shaped like the Leaning Tower" caption="Galileo and a telescope shaped like the Leaning Tower, on a wall in Pisa." >}}

The photos I include here were all taken by me during a conference visit to Pisa in September 2026.
