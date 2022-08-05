A differential equation is a higher-order equation. Its solutions are __functions__.



## Example 1
$\frac{dy}{dx} = 3x^2$

We're looking for functions whose derivative is equal to $3x^2$. The __general solution__ is $f(x) = x^3 + C$

## Example 2
Solve $\frac{dy}{dx} = 3x^2$, with the initial condition that $y(1) = 5$.

$f(x) = x^3 + C$
$5 = 1^3 + C$
$5 = 1 + C$
$C = 4$

$f(x) = x^3 + 4$



## Example 3

1) $\frac{dy}{dx} = \frac{1}{x^2} + x$; $y(2) = 1$
    $f(x) = 0.5x^2 -x^{-1} + C$
	$1 = 0.5*2^2 - 2^{-1} + C$
	$1 = 0.5*4 - 0.5 + C$
	$1 = 2 - 0.5 + C$
	$1 = 1.5 + C$
	$-0.5 = C$
	$$f(x) = 0.5x^2 -x^{-1} - 0.5$$
2) $\frac{d^2y}{dx^2} = 2 - 6x$; $y(0) = 1$; $y'(0) = 4$
	$f(x) = -x^3 + x^2 + Dx + C$
	$f'(x) = -3x^2 + 2x + D$
	$4 = 0 + D$
	$4 = D$
	$f(x) = -x^3 + x^2 + 4x + C$
	$1 = 0 + C$
	$C = 1$
	$f'(x) = -3x^2 + 2x + 4$
	$f(x) = -x^3 + x^2 + 4x + 1$
	
	
## Practice
1) $\frac{dy}{dx} = 2x - 1$; $y(2) = 0$
	$y(x) = x^2 - x$
2) $\frac{dy}{dx} = \sec(x)^2$; $y(\pi/4) = -1$
	$y(x) = \tan(x) - 2$
3) $\frac{dy}{dx} = 9x^2 - 4x + 5$; $y(-1) = 0$
	$y(x) = 3x^3 - 2x^2 + 5x + 10$
4) $\frac{dy}{dt} = 2e^{-t}$; $y(\ln(2)) = 0$
	$y(t) = -2e^{-t} + 1$
5) $\frac{d^2y}{d\theta^2} = \sin(\theta)$; $y(0) = -3$; $y'(0) = 0$
	$y'(\theta) = -cos(\theta) + 1$
	$y(\theta) = -sin(\theta) + \theta - 3$
6) $\frac{d^3y}{dt^3} = \frac{1}{t^3}$; $y(1) = 1$; $y'(1) = 3$; $y''(1) = 2$
	$y''(t) = -0.5t^{-2} + 2.5$
	$y'(t) = 0.5t^{-1} + 2.5t + 0$
	$y(t) = 0.5\ln(t) + 1.25t^2 + 0t - 0.25$

## Verifying Differential Equations

1) C, D, F
2) True statement
3) True statement