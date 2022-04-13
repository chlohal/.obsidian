# Common Types of Notations for 2nd Order Derivatives

**1**
$f'(x)$
$\frac{dy}{dx}$

**2**
$f''(x)$
$\frac{d^2y}{dx^2}$
The fractions aren't the same on the top on the bottom because it means "derive $\frac{dy}{dx}$ with respect to $x$".


**3**
$f'''(x)$
$\frac{d^3y}{dx^3}$


## Practices

### Practice 1

$y = 2x^4 - 7x^2 + 5x - 2$

$\frac{dy}{dx}[y = 2x^4 - 7x^2 + 5x - 2] = 8x^3 - 14x + 5$
$\frac{d^2y}{dx^2}[y = 2x^4 - 7x^2 + 5x - 2] = 24x^2 - 14$
$\frac{d^3y}{dx^3}[y = 2x^4 - 7x^2 + 5x - 2] = 48x$
$\frac{d^4y}{dx^4}[y = 2x^4 - 7x^2 + 5x - 2] = 48$
$\frac{d^5y}{dx^5}[y = 2x^4 - 7x^2 + 5x - 2] = 0$


### Practice 2

$y = 5sin(2x)$
$y' = 10cos(2x)$
$y'' = -20sin(2x)$

### Practice 3: Implicit Derivatives

$y^2 = 3x - 7y$
$\frac{dy}{dx}[y^2 = 3x - 7y] = [2\frac{dy}{dx}y = 3 - 7\frac{dy}{dx}]$
$\frac{dy}{dx}[y^2 = 3x - 7y] = [2\frac{dy}{dx}y + 7\frac{dy}{dx}= 3]$
$\frac{dy}{dx}[y^2 = 3x - 7y] = [\frac{dy}{dx}(2y + 7) = 3]$
$\frac{dy}{dx}[y^2 = 3x - 7y] = \frac{3}{2y + 7}$

$\frac{dy}{dx}[\frac{3}{2y + 7}] = \frac{ -6\frac{dy}{dx}}{(2y + 7)^2}$

**Once you've derived, substitute *in* the value of $\frac{dy}{dx}$. You can find that in the equation above in the first step-- it's $\frac{3}{2y+7}$.**

$\frac{dy}{dx}[\frac{3}{2y + 7}] = \frac{-18}{(2y + 7)^3}$

$\frac{d^2y}{dx^2}[y^2 = 3x - 7y] = \frac{-18}{(2y + 7)^3}$

### Practice 4: Finding at a Point

$x^2 + y^2 = 25$

$\frac{dy}{dx} [x^2 + y^2 = 25] = 2x + \frac{dy}{dx}2y = 0$
$\frac{dy}{dx} [x^2 + y^2 = 25] = 2x = -\frac{dy}{dx}2y$
$\frac{dy}{dx} [x^2 + y^2 = 25] = \frac{-2x}{2y} = \frac{dy}{dx}$

$\frac{d^2y}{dx^2} = \frac{(2*2y) - (2*2x\frac{dy}{dx})}{(2y)^2}$
$\frac{d^2y}{dx^2} = \frac{4y - 4x\frac{dy}{dx}}{(2y)^2}$
$\frac{d^2y}{dx^2} = \frac{4y - 4x\frac{-2x}{2y}}{(2y)^2}$
$\frac{d^2y}{dx^2} = \frac{4y - 4x\frac{-2x}{2y}}{(2y)^2}$