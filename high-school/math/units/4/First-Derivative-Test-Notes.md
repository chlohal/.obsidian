A critical point is where $f'(x) = 0$ or $f'(x) = \pm\infty$ or $f'(x) \not\exists$. 

A critical point of $f(x)$ is a relative minimum if $f'(x)$ changes from negative to positive.

A critical point of $f(x)$ is a relative maximum if $f'(x)$ changes from positive to negative.

## Example 1: For which x-values does $f(x) = -x^3 + 2x^2 + 1$ have a relative minimum?

1) Identify the critical points.

	$f'(x) = -3x^2 + 4x$
	$f'(x) = x(-3x + 4)$
	$f'(x) = 3x(x - \frac{4}{3})$
	$\{0, \frac{4}{3}\}$

2) Classify the critical points
    $(f'(x) \forall x<0) < 0$
	$(f'(x) \forall 0<x<\frac{4}{3}) > 0$
	$(f'(x) \forall x>\frac{4}{3}) < 0$
	
3) Use calculus to justify your answer

    $f(x)$ has a relative minimum at $x=0$ because $f'(0) = 0$ and $f'(x)$ changes from negative to positive.
	
	
	
_we're gonna skip some for now_

## Example 4: Suppose that $g(x) = \frac{(x+1)^2}{x^2-4}$. Find and classify all critical points for the original function $g(x)$ and justify your reasoning.

1) Find Critical Points
	$g'(x) = \frac{ (2(x+1))(1)(x^2-4) - (x+1)^2 * 2x }{(x^2-4)^2}$
	$g'(x) = \frac{ (2(x+1))(x^2-4) - (x+1)^2 * 2x }{(x^2-4)^2}$
	$g'(x) = \frac{ (2(x+1))(x^2-4) - (x+1)^2 2x }{(x^2-4)^2}$
	$g'(x) = \frac{ (2(x+1))(x^2-4) - (x+1)(x+1) 2x }{(x^2-4)^2}$
	$g'(x) = \frac{ (2(x+1))(x^2-4) - (x^2 + 2x + 1) 2x }{(x^2-4)^2}$
	$g'(x) = \frac{ 2(x+1)(x^2-4) - (x^2 + 2x + 1) 2x }{(x^2-4)^2}$
	$g'(x) = \frac{ 2(x+1)(x^2-4) - (2x^3 + 4x^2 + 2x) }{(x^2-4)^2}$
	$g'(x) = \frac{ 2(x^3 + x^2 -4x -4) - (2x^3 + 4x^2 + 2x) }{(x^2-4)^2}$
	$g'(x) = \frac{ (2x^3 + 2x^2 -8x -8) - (2x^3 + 4x^2 + 2x) }{(x^2-4)^2}$
	$g'(x) = \frac{ (2x^3 + 2x^2 -8x -8) - 2x^3 - 4x^2 - 2x }{(x^2-4)^2}$
	$g'(x) = \frac{ 2x^3 + 2x^2 -8x -8 - 2x^3 - 4x^2 - 2x }{(x^2-4)^2}$
	$g'(x) = \frac{ -2x^2 -10x -8}{(x^2-4)^2}$
	$g'(x) = \frac{ -2x^2 -10x -8}{(x^2-4)(x^2-4)}$
	$g'(x) = \frac{ -2x^2 -10x -8}{x^4 - 8x^2  + 16}$
	$g'(x) = \frac{ -2(x^2 + 5x + 4)}{(x^2-4)(x^2-4)}$
	$g'(x) = \frac{ -2(x + 4)(x+ 1)}{(x + 2)(x - 2)(x + 2)(x - 2)}$
	$g'(x) = \frac{ -2(x + 4)(x+ 1)}{(x + 2)^2(x - 2)^2}$
	
	
	# How to Find the Absolute Maximum & Absolute Minimum
	
1) Find the critical points: $f(x) = 3x^4 - 4x^3$ on the interval $[-1,2]$.
	$f'(x) = 12x^3 - 12x^2$
	$f'(x) = 12x^2(x - 1)$
	$f'(x) = 12x^2(x - 1)$
1) Test each critical point for its y-value **on the original function**, find the minimums & maximums. **Make sure to check the endpoints of the interval too.*
	$(f'(x) > 0) \forall x < 1$
	$(f'(x) < 0) \forall x < 1$
	$f(0) = 0$
	$f(1) = -1$
	$f(2) = 16$
	$f(-1) = 7$