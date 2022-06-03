## Problem Set 1

Region R is bounded by the y-axis, the line $y=6$, and the curve $y=2\sqrt{x}$. Find the volume of the solid when Region R is rotated around *the vertical line $x=-2$*.

$\sqrt{x}=0.5y$
$x=(0.5y)^2$
$x=0.25y^2$

$R = 0.25y^2 + 2$
$r = 2$

$\pi \int_0^6 ((0.25y^2 + 2)^2 - 2^2) dy$
$169.2\pi$
$531.557$

---
> [!success]
> Our sum is $1345.858$


## Problem Set 2

Let J be the region bounded by $y = x + 1$ and $y = 0.5x^2 + 1$. Find the volume of the solid generated when $J$ is rotated around... *the x-axis*

$R = x + 1$
$r = 0.5x^2 + 1$

$\pi \int_0^2 ((x + 1)^2 - (0.5x^2 + 1)^2) dx$
$2.4\pi$
$7.539$

---
> [!error] Incorrect
> Our sum is 31.833
---
### *Attempting Part B*

$\int_1^3 ((3 - (y - 1))^2 - (3 - \sqrt{2(y - 1)})^2) dy$

---
> [!success]
> Our sum is 19.267

## Problem Set 3

Let $R$ be the region bounded by the graphs $y = 5-x$, $y = \ln(x)$, and the x-axis. Find the volume of the solid generated when $R$ is rotated around *the x-axis*

$5 - x = \ln(x) \implies x = 3.693$

$R = \ln(x) \impliedby x < 3.693, 5 - x \impliedby x > 3.693$
$r = 0$

$\pi\int_1^{3.693} (\ln(x))^2 dx + \pi\int_{3.693}^5 (5 - x)^2 dx$
$2.784\pi$
$8.746$

---
> [!error] Incorrect
> Our sum is $81.135$

*there was a mis-input; everything was logically correct, though*

> [!success]
> Our sum is $94.533$

## Problem Set 4

Let $R$ be the region bounded by $y = x - 2$ and $y = \ln(x)$. Find the volume of the solid generated when $R$ is rotated around *the line $x = 5$*.

$R = 5 - e^y$
$r = 5 - y + 2$

$\pi \int_{-1.841}^{1.146} (((5 - e^y)^2) - (5 - (y + 2))^2) dy$


> [!warning] Class ended before we finished.