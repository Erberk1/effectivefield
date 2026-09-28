---
title: "Fermi's Pisa"
date: 2026-09-28
math: true
showToc: false
tags: ["Enrico Fermi", "Pisa", "history", "physics"]
summary: "A visit to the Scuola Normale Superiore, Fermi’s handwritten entrance examinations, and the mathematics of a vibrating rod."
---

{{< fermi-photo src="/images/posts/fermis-pisa/fermi-portrait-preview.webp" width="750" height="1000" full="/images/posts/fermis-pisa/fermi-portrait.webp" alt="Photograph of a mounted black-and-white portrait of Enrico Fermi" caption="Enrico Fermi. A portrait photographed during my visit to the Scuola Normale Superiore." class="fermi-photo--hero" loading="eager" >}}

Enrico Fermi was one of the great physicists of the twentieth century. His work ranged from quantum statistics to the neutron experiments he carried out in Rome, and later to the first controlled nuclear chain reaction in Chicago and the Manhattan Project. For many young physicists, his name first becomes familiar through *fermions*: particles with half-integer spin that obey Fermi–Dirac statistics.[^fermi]

I first learned about Fermi as a thirteen-year-old, in a book about fifty ideas in physics. One of those ideas was the Fermi paradox: if the universe is so old and so vast, why have we not found evidence of other technological civilizations? Simply placing possible civilizations beyond our light cone does not settle the version of the question that concerns our own galaxy. Given the right assumptions about how civilizations expand, even travel far slower than light can allow them to cross the Milky Way on timescales much shorter than its age.[^paradox]

Fermi's name is also inseparable from the art of estimating an answer before attempting a detailed calculation. At the Trinity test, he dropped small pieces of paper and watched how far the arriving blast wave displaced them. He inferred an explosive yield of about ten kilotons of TNT: a remarkably useful estimate of the scale of the explosion from such a simple observation.[^trinity]

That ability has always fascinated me. An estimate forces us to decide what matters physically, before the algebra can hide it. Whether in quantum mechanics or general relativity, knowing the right scale can guide a much deeper calculation. The gravitational power scale often associated with Dyson is a good example of how far dimensional reasoning can take us—even though interpreting it as a universal upper bound requires more care.[^dyson]

My fascination with Fermi grew when I read *The Pope of Physics* in high school. It was there that I learned more about his intellectual upbringing in Pisa, and especially at the Scuola Normale Superiore.

## Pisa and the Normale

It is difficult for a physicist to visit Pisa without thinking of Galileo. Born here in 1564, he later studied and taught at the university. His combination of mathematical reasoning, experiment, and observation helped shape modern physics: from the motion of falling bodies to the moons of Jupiter.[^galileo]

Centuries later, Pisa became home to the Scuola Normale Superiore. Founded by Napoleon in 1810 on the model of the École Normale in Paris, it developed into a small institution with a demanding entrance examination and an intense intellectual life.[^normale]

In 1918, a seventeen-year-old Enrico Fermi took that examination. The physics essay asked about the distinguishing characteristics of sounds and their causes. Fermi answered with the differential equation of a vibrating rod and a treatment using Fourier analysis. The mathematical maturity of his answer astonished the examiners; Giulio Pittarelli subsequently questioned him about it and recognized his exceptional ability.[^exam]

{{< fermi-photo src="/images/posts/fermis-pisa/physics-exam-preview.webp" width="709" height="1000" full="/images/posts/fermis-pisa/physics-exam.webp" alt="Fermi's handwritten physics examination headed 14 November 1918, on the characteristics of sound" caption="The physics entrance examination, 14 November 1918." class="fermi-photo--manuscript" >}}

I had heard the story of this essay for years. During my visit, I was able to photograph the examination papers myself. Seeing the handwriting makes the familiar anecdote feel much more immediate.

## The vibrating rod

Below, I revisit the calculation in modern notation. This is a reconstruction of the cantilever problem, rather than a line-by-line transcription of the photographed manuscript.

Consider the small transverse vibrations of a uniform elastic rod, clamped at one end and free at the other. In the Euler–Bernoulli approximation, its displacement satisfies

<div class="fermi-equation">
$$
\frac{\partial^2 y}{\partial t^2}
+ a^2\frac{\partial^4 y}{\partial x^4}=0,
\qquad a^2=\frac{EI}{m}.
$$
</div>

Here, <span class="fermi-inline-math">$y(x,t)$</span> is the transverse displacement, <span class="fermi-inline-math">$E$</span> is Young's modulus, <span class="fermi-inline-math">$I$</span> is the second moment of area of the cross-section, and <span class="fermi-inline-math">$m$</span> is the mass per unit length. We take these material and geometric properties to be constant along the rod.

We can expand the motion into spatial modes and temporal harmonics. For the sine part of the expansion,

<div class="fermi-equation">
$$
y(x,t)=\sum_n u_n(x)\sin(k_n t),
$$
</div>

where <span class="fermi-inline-math">$k_n$</span> denotes an angular frequency. The general motion can also contain cosine terms, with their coefficients fixed by the initial displacement and velocity. Differentiating the sine expansion gives

<div class="fermi-equation">
$$
\begin{aligned}
\frac{\partial^2 y}{\partial t^2}
&=-\sum_n k_n^2u_n(x)\sin(k_n t),\\[4pt]
\frac{\partial^4 y}{\partial x^4}
&=\sum_n u_n^{(4)}(x)\sin(k_n t).
\end{aligned}
$$
</div>

Substitution into the equation of motion leaves a fourth-order ordinary differential equation for each spatial mode. Suppressing the mode index for the moment,

<div class="fermi-equation">
$$
\frac{d^4u}{dx^4}-\beta^4u=0,
\qquad \beta^4=\frac{k^2}{a^2}.
$$
</div>

The characteristic equation has four roots,

<div class="fermi-equation">
$$
r^4-\beta^4=0,
\qquad r=\pm\beta,\;\pm i\beta.
$$
</div>

The general spatial solution is therefore

<div class="fermi-equation">
$$
\begin{aligned}
u(x)={}&C_1\cosh(\beta x)+C_2\sinh(\beta x)\\
&+C_3\cos(\beta x)+C_4\sin(\beta x).
\end{aligned}
$$
</div>

At the clamped end, both displacement and slope vanish:

<div class="fermi-equation">
$$
\begin{aligned}
u(0)=0&\quad\Longrightarrow\quad C_3=-C_1,\\
u'(0)=0&\quad\Longrightarrow\quad C_4=-C_2.
\end{aligned}
$$
</div>

This reduces the mode shape to two independent coefficients:

<div class="fermi-equation">
$$
\begin{aligned}
u(x)={}&C_1\bigl[\cosh(\beta x)-\cos(\beta x)\bigr]\\
&+C_2\bigl[\sinh(\beta x)-\sin(\beta x)\bigr].
\end{aligned}
$$
</div>

At the free end, the bending moment and the transverse shear force must vanish. For a uniform rod, these conditions are

<div class="fermi-equation">
$$
u''(L)=0,
\qquad u'''(L)=0.
$$
</div>

Writing <span class="fermi-inline-math">$\mu=\beta L$</span>, the two equations become

<div class="fermi-equation">
$$
\begin{aligned}
\frac{u''(L)}{\beta^2}
={}&C_1(\cosh\mu+\cos\mu)\\
&+C_2(\sinh\mu+\sin\mu)=0,\\[6pt]
\frac{u'''(L)}{\beta^3}
={}&C_1(\sinh\mu-\sin\mu)\\
&+C_2(\cosh\mu+\cos\mu)=0.
\end{aligned}
$$
</div>

For a nontrivial vibration, the coefficients cannot both be zero. The determinant of this system must therefore vanish:

<div class="fermi-equation">
$$
\begin{aligned}
0={}&(\cosh\mu+\cos\mu)^2\\
&-(\sinh\mu+\sin\mu)\\
&\qquad\times(\sinh\mu-\sin\mu).
\end{aligned}
$$
</div>

Expanding and collecting terms gives

<div class="fermi-equation">
$$
\begin{aligned}
0={}&\cosh^2\mu-\sinh^2\mu\\
&+\cos^2\mu+\sin^2\mu\\
&+2\cosh\mu\cos\mu.
\end{aligned}
$$
</div>

Now the familiar identities do almost all the work:

<div class="fermi-equation">
$$
\begin{aligned}
\cosh^2\mu-\sinh^2\mu&=1,\\
\cos^2\mu+\sin^2\mu&=1.
\end{aligned}
$$
</div>

The result is the transcendental characteristic equation

<div class="fermi-equation">
$$
\begin{aligned}
2+2\cosh\mu\cos\mu&=0,\\
\cosh\mu\cos\mu+1&=0.
\end{aligned}
$$
</div>

Equivalently, the permitted values of <span class="fermi-inline-math">$\mu$</span> solve

<div class="fermi-equation">
$$
\cos\mu=-\frac{1}{\cosh\mu}.
$$
</div>

The first three positive roots are

<div class="fermi-equation">
$$
\begin{aligned}
\mu_1&\approx1.875,\\
\mu_2&\approx4.694,\\
\mu_3&\approx7.855.
\end{aligned}
$$
</div>

Since <span class="fermi-inline-math">$\beta^4=k^2/a^2$</span>, the corresponding angular frequencies are

<div class="fermi-equation">
$$
k_n=\frac{\mu_n^2}{L^2}\sqrt{\frac{EI}{m}}.
$$
</div>

To express them in cycles per second, we use <span class="fermi-inline-math">$f_n=k_n/(2\pi)$</span>. Because these frequencies scale with the squares of the roots, the overtones are not integer multiples of the fundamental. The mathematics captures the inharmonic overtones of a vibrating bar.[^beam]

{{< fermi-gallery >}}
{{< fermi-photo src="/images/posts/fermis-pisa/geometry-exam-preview.webp" width="720" height="1000" full="/images/posts/fermis-pisa/geometry-exam.webp" alt="Fermi's handwritten geometry examination with a geometric construction" caption="Geometry examination, 13 November 1918." class="fermi-photo--manuscript" >}}
{{< fermi-photo src="/images/posts/fermis-pisa/algebra-exam-preview.webp" width="737" height="1000" full="/images/posts/fermis-pisa/algebra-exam.webp" alt="Fermi's handwritten algebra examination with powers and complex numbers" caption="Algebra examination, 12 November 1918." class="fermi-photo--manuscript" >}}
{{< /fermi-gallery >}}

I do not know every detail of the examination setting or what reference materials, if any, were available. But the mathematical command displayed by a seventeen-year-old in an entrance examination is impressive enough on its own. After working through the calculation, I can understand why this essay became so famous.

{{< fermi-gallery >}}
{{< fermi-photo src="/images/posts/fermis-pisa/calculations-preview.webp" width="744" height="1000" full="/images/posts/fermis-pisa/calculations.webp" alt="A manuscript page of trigonometric expressions and numerical calculations" caption="A page of handwritten calculations among the examination papers." class="fermi-photo--manuscript" >}}
{{< fermi-photo src="/images/posts/fermis-pisa/university-document-preview.webp" width="678" height="1000" full="/images/posts/fermis-pisa/university-document.webp" alt="Handwritten document headed R. Università degli Studi di Roma" caption="A document on the headed paper of the Royal University of Rome, displayed with the examination papers." class="fermi-photo--manuscript" >}}
{{< /fermi-gallery >}}

## Inside the Scuola

Returning to the building itself, the Palazzo della Carovana had a long life before the Normale. Remodelled by Giorgio Vasari in the sixteenth century, it housed the college of the Knights of the Order of Saint Stephen. Today, it is home to teaching rooms, offices, the historical archive, and part of the library.[^carovana]

{{< fermi-gallery >}}
{{< fermi-photo src="/images/posts/fermis-pisa/library-preview.webp" width="750" height="1000" full="/images/posts/fermis-pisa/library.webp" alt="Wooden bookcases and a blue Scuola Normale Superiore banner" caption="Books and the Scuola’s banner inside the Palazzo della Carovana." >}}
{{< fermi-photo src="/images/posts/fermis-pisa/glass-ceiling-preview.webp" width="750" height="1000" full="/images/posts/fermis-pisa/glass-ceiling.webp" alt="A coloured glass ceiling above the interior of the Palazzo della Carovana" caption="The glass ceiling inside the Scuola." >}}
{{< /fermi-gallery >}}

The rooms, the books, and the glass ceiling were beautiful. Their history is part of what makes visiting this building so compelling. The stairs led towards Fermi's room, near the view over the square where the Scuola stands.

{{< fermi-photo src="/images/posts/fermis-pisa/fermi-room-preview.webp" width="750" height="1000" full="/images/posts/fermis-pisa/fermi-room.webp" alt="A corridor and doorway inside the Palazzo della Carovana" caption="A corridor inside the Palazzo della Carovana." >}}

Physics does not depend on where it is practised. The same laws hold in Pisa as anywhere else. Yet a place can affect the questions we feel drawn to ask, and the patience with which we think about them. For me, the Scuola Normale and Pisa make that connection between an intellectual tradition and a living place unusually tangible.

{{< fermi-photo src="/images/posts/fermis-pisa/pisa-mural-preview.webp" width="1000" height="750" full="/images/posts/fermis-pisa/pisa-mural.webp" alt="A Pisa street mural showing Galileo looking through a telescope shaped like the Leaning Tower" caption="Galileo and a telescope shaped like the Leaning Tower, on a wall in Pisa." >}}

*All the photographs in this entry were taken by me during a conference visit to Pisa in September 2026.*

[^fermi]: [Enrico Fermi's biography](https://www.nobelprize.org/prizes/physics/1938/fermi/biographical/), Nobel Prize; [Fermi at Chicago](https://www.lib.uchicago.edu/collex/exhibits/university-chicago-centennial-catalogues/university-chicago-faculty-centennial-view/enrico-fermi-1901-1954-physics/), University of Chicago Library.
[^paradox]: Geoffrey A. Landis, [“The Fermi paradox: An approach based on percolation theory”](https://ntrs.nasa.gov/citations/19940022867), NASA Technical Reports Server.
[^trinity]: Jonathan I. Katz, [“Fermi at Trinity”](https://arxiv.org/abs/2103.05784).
[^dyson]: Aden Jowsey and Matt Visser, [“Reconsidering maximum luminosity”](https://arxiv.org/abs/2105.06650).
[^galileo]: [Galileo Galilei](https://catalogue.museogalileo.it/biography/GalileoGalilei.html) and [Galileo and the science of motion](https://catalogue.museogalileo.it/multimedia/GalileoScienceMotionBis.html), Museo Galileo.
[^normale]: [The Normale's founding and tradition](https://www.sns.it/it/all-avanguardia-per-tradizione), Scuola Normale Superiore.
[^exam]: [An exhibition of Fermi's entrance examination](https://normalenews.sns.it/chimica-e-nanoscienze-con-maurizio-prato-per-gli-incontri-vis), Scuola Normale Superiore; [Fermi's preparation and examination](https://media.accademiaxl.it/pubblicazioni/ScuolaFermi/st3.html), Accademia Nazionale delle Scienze detta dei XL.
[^beam]: Scott Whitney, [Vibrations of Cantilever Beams](https://emweb.unl.edu/mechanics-pages/scott-whitney/325hweb/beams.htm), University of Nebraska–Lincoln.
[^carovana]: [Palazzo della Carovana](https://www.sns.it/it/palazzo-della-carovana), Scuola Normale Superiore.
