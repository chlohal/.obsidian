Suppose the velocity of a moving object is given by the function $v(t) = t^2 + 10$ where $v(t)$ is in feet per minute and $t$ is in minutes. To find out the distance that the ogject traveled from $t=1$ to $t=4$, we would need to find the area of the region between the curve and the x-axis from $t=1$ to $t=4$.

We're going to estimate the area under $v(t) = t^2 + 10$ from 1 to 4 with rectangles. Let's use 3 to start:

They should all have the same base; with $4 - 1 = 3$ and 3 rectangles, they should each have a base of $1$ and a **left-hand height**. A left-hand height means that they should have the height of $v(m + br)$, where $r$ is 0 for the first rectangle, 1 for the second, etc, $r$ is the base, and $m$ is 1 since that's the start of the interval.

The first rectangle has an area of $(1^2 + 10) *1 = 11$; the second has $(2^2 + 10) *1 = 14$ , and the 3rd has $(3^2 + 10) *1 = 19$. The total of these is $11 + 14 + 19 = 44$. This is an underestimate, since there's area under the curve we don't process.

To get more precise, we can increase 3 to 6!

$b = 3 / 6 = 0.5$
$m = 1$

$A_0 = ((1 + 0*0.5)^2 + 10) * 0.5 = 6.5$
$A_0 = ((1 + 1*0.5)^2 + 10) * 0.5 = 6.125$

Hold on, this is difficult. We can factor out the common $0.5!$

$A = 0.5 * ( v(1) + v(1.5) + v(2) + v(2.5) + v(3) + v(3.5) ) = 47.375$

woah this looks like sigma notation

$A = 0.5 * \sum\limits_{n=0}^{6 - 1} v(m + 0.5n) = 47.375$
$A = \frac{M - m}{r} * \sum\limits_{n=0}^{r - 1} v(m + \frac{M - m}{r} * n) = 47.375$

## Left-Hand Sums
Yep, there we go!
$A = \Delta x * \sum\limits_{i=0}^{n - 1} f(a + \Delta x * i)$



## Right-Hand Sums

Pretty simply, instead of using the left-hand side, you use the right-hand side as your sampling point!

$A = \frac{M - m}{r} * \sum\limits_{n=1}^{r} v(m + \frac{M - m}{r} * n)$


## Midpoint Sums

Just like the others, except you use the midpoint of each rectangle as your sampling point.

$A = \frac{M - m}{r} * \sum\limits_{n=0}^{r - 1} v(m + \frac{M - m}{r} * (n + 0.5))$


## Examples!

Estimate the area of the region bounded by $h(x) = e^x$ from $x=1$ to $x=3$ using a **left** sum with **4** rectangles

$r = 4$
$M = 3$
$m = 1$

$A = \frac{M - m}{r} * \sum\limits_{n=0}^{r - 1} h(m + \frac{M - m}{r} * (n + 0.5))$
$A = \frac{M - m}{r} * \sum\limits_{n=0}^{r - 1} h(m + \frac{M - m}{r} * (n + 0.5))$

Estimate the table.

:/ i didn't write this one down, sorry future-me

Estimate the distance travelled 

oh no it's a chart/table againnnnnnnnnnn
ughhh

$b (h1 + h2) /2$ 


# Notation

$x_0 = a$
$x_n = b$
We want to find the area between the graph of a function $f(x)$ and the x-axis from $x_0 = a$ to $x_n = b$ using $n$ rectangles.

$\Delta x = \frac{b-a}{n}$

$R_0 = f(a)* \Delta x$


$R_n = f(x_{n-1})* \Delta x$

$R_n = f(a + \Delta x n)* \Delta x$

$R_n = f(\frac{x_{n - 1} + x_{n}}{2}) * \Delta x$

## Limits!

$A = \Delta x * \sum\limits_{i=0}^{n - 1} f(a + \Delta x * i)$

$A = \lim_{n -> \infty} \Delta x * \sum\limits_{i=1}^{n} f(x_i)$

$A = \lim_{n -> \infty} \Delta x * \sum\limits_{i=1}^{n} f(a + \Delta x * (i - 1))$

## Integral Notation
$\int\limits_{a}^{b} f(x)dx$

a: the lower limit of integration
b: the upper limit of integration
f(x): the integrand
x: the variable of integration

# Practice
Concave Up Increasing

```desmos-graph
y=x^2
```
Left-hand Sum: Underestimate
Right-hand Sum: Overestimate

Concave Up Decreasing

Left-hand Sum: Underestimate
Right-handSum: Overestimate

Concave Down Increasing

Left-hand Sum: Underestimate
Right-hand Sum: Overestimate

Concave Down Decreasing

Concave Up

Trapezoid: Overestimate

Concave Down

Trapezoid: Underestimate