So far, we've been using horizontal accumulation: $y = f(x)$. However, in some relations (e.g. $x = 0.5y^2 - 3$), you *have* to go vertical instead! Instead of doing the integral from left to right, you'll do it from the bottom to the top.

> $$A(y) = \int_c^d [f(y) - g(y)] dy$$
> Note the $dy$!

## Example 1

Determine the area enclosed by $x=0.5y^2 - 3$ and $y = x - 1$

*translate trivial functions by solving for x*
$x = y + 1$

The limits of integration are where $0.5y^2 - 3 = y + 1$.
$0.5y^2 - y - 4 = 0$
$y^2 - 2y - 8 = 0$
$(y + 2)(y - 4) = 0$

$\int_{-2}^4 (y + 1 - (0.5y^2 - 3)) dy = 18$

## Example 2

Determine the area enclosed by $x=-y^2+10$ and $x=(y-2)^2$

${-1,3}$

$\int_{-1}^3 (-y^2+10 - (y-2)^2) dy = 21.3333$


## Example 3

Determine the area enclosed by the functions $y = 6-x-2x^2$ and $y=4x+3$ on the interval $[-4,2]$

These intersect on two points, but there's *3* areas, since we're trying to find an interval that encloses those points!

$$\int_{-4}^{-3} ((y=4x+3) - (6-x-2x^2)) dx +
\int_{-3}^{0.5} ((6-x-2x^2) - (y=4x+3)) dx +
\int_{0.5}^{2} ((y=4x+3) - (6-x-2x^2)) dx$$


