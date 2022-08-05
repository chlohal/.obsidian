To find the area between two curves, you can use $\int\limits_{a}^{b}C_1(x)dx -\int\limits_{a}^{b}C_2(x)dx$
	$\int\limits_{a}^{b} [ C_1(x) - C_2(x)] dx$
	
	
## Example 1
Let $R$ be a region in the first quadrant enclosed by the graphs of $y = 3x$ and $y = x^2$.

$A_R = \int\limits_{a}^{b} [ 3x - x^2] dx$
$A_R = 1.5x^2 - \frac{1}{3}x^3 |_0^3$
$A_R(3) - A_R(0) = 4.5$

## Example 2

Find the area bounded by the graphs of $y=x^2+3$, $y=x$, $x=0$, and $x=2$

$A = \int\limits_{0}^{2} [ x^2 + 3 - x] dx$

$A = 0.5x^3 + 3x - 0.5x^2 |_0^2dx$

$A(2) - A(0) = 8$

## Example 3

Find the area of the region $R$ enclosed by the y-axis and the graphs of $\sin(x)$ and $\cos(x)$.

$A_R = \int\limits_{0}^{0.25\pi} [ \cos(x) - \sin(x) ] dx$
$A_R = \sin(x) + \cos(x) |_0^{0.25\pi}$
$A_R = \sqrt{2} - 1$

## Example 4

Find the area of the region $R$ bounded by $f(x) = \sin(2x)$ and $g(x) = x^3 - 2x$.

$f(x) = g(x) \implies x=1.464$

$A_R = \int\limits_{0}^{1.464} [ \sin(2x) - x^3 + 2x ] dx$
$A_R = 1.98$

## Example 5

Let $R$ be the region bounded by $y=0$,  $y=\tan(x)$, and $y=2-x^3$. Let $S$ be the region bounded by $x=0$, $y=\tan(x)$, and $y=2-x^3$.

1. Find the area of the region R
	$2-x^3 = \tan(x) \implies x= 0.902$
	$\int_0^{0.902} \tan(x) dx + \int_{0.902}^{\sqrt[3]{2}} (2 - x^3) dx = 0.72933$
	$A_R = 0.72933$
2. Find the area of the region S
	$2-x^3 = \tan(x) \implies x= 0.902$
	$\int_0^{0.902} (\sqrt[3]{2} - \tan(x)) dx$
	$A_S = 0.65848$
