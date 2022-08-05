# The Fundamental Theorum of Calculus

There's two parts of the FTC:
- Derivative Part: an **accumulation of change** function as an integral
- Evaluative Part: helps us quantify definite integrals *exactly*

## The Derivative Part

What if the upper limit *wasn't a fixed value?* i.e. what if it's a variable?

$A(x) = \int\limits_{a}^{x} f(t)dt$

The area is a function of x: $A(X)$. We refer to this as an **accumulation function**; it's the integral from a *fixed* lower limit to a *dynamic* upper limit.

#### Example 1: Evaluating an Accumulation Function

f(x):
```desmos-graph
y=2x
```

$A(x) = \int\limits_{0}^{x}f(t)dt$

|$x$|$A(x)$|
|-|-|
|0|0|
|1|1|
|2|4|
|3|9|
|4|16|

Note that $A(x)$ can be written *without* an integral! $A(x) = x^2$.

$A'(x) = 2x$.

**Therefore, the derivative of the accumulation function is the original function**:
$\frac{d}{dx} [ \int\limits_{0}^{x} f(t)dt ] = f(x)$


### To generalise:

As long as $f$ is continuous on an *open* interval that contains $a$, for every $x$ inside the interval,

$$
\frac{d}{dx} [\int\limits_{a}^{t} f(t) dt] = f(x)
$$

$$
g(x) = \int\limits_{a}^{x} f(t) dt \implies g'(x) = f(x)
$$

#### Example 2:

If $g(x) = \int\limits_{0}^{x} (t^2 + 4)dt$, what is $g'(5)$?

$g'(x) = f(x)$
$g'(x) = x^2 + 4$
$g'(5) = 29$

##### part b:

If $h(u) = \int\limits_{0}^{u} (cos(q) + e^q)dq$, what is $h'(0)$?

$h'(x) = cos(x) + e^x$
$h'(0) = 2$

#### Example 3: Connecting to Position and Velocity

The altitude, in feet, of an airplane in flight is given by $h(t) = \int\limits_{0}^{t} (1000 - 50u) du$.

a) What rate is altitude changing at at $t=5$ minutes?
$h'(5) = (1000 -50*5)$
$h'(5) = (1000 - 250)$
$h'(5) = 750$

b) Is the aircraft ascending or descending at $t=5$?

Ascending

c) At what time does the aircraft reach its maximum height?

$h'(20) = 0$
The aircraft reaches maximum height at $t=20$ minutes because $h'(20) = 0$ and changes from positive to negative. This is the only root of $h'(x)$.

#### Example 4: Tangent Lines!

Suppose $f(x) = 4 + \int\limits_{-2}^{x} (\sin(\frac{\pi t^2}{8})) dt$

Write the equation of the line tangent to $f(x)$ at the point where $x = -2$

$f'(x) = \sin(\frac{\pi x^2}{8})$
$f'(-2) = \sin(\frac{\pi 4}{8}) = \sin(0.5\pi) = 1$

$y + 4 = (x + 2)$


#### Example 5: Chain Rule and Stuff
Evaluate the following.
$$
\frac{d}{dx} [\int\limits_{-1}^{x^2} sin(r) dr] = 2sin(r)
$$


### What if the Function is the Lower Limit?

$g(x) = \int\limits_{x}^{a} f(t) dt$

Use properties of definite integrals so the function is the upper limit!

$g(x) = -\int\limits_{a}^{x} f(t) dt$ and $g'(x) = -f(x)$

#### Example 6: 
Find $F'(x)$

a) $F(x) = \int\limits_{x}^{-2}(t^3 - 4t + 1) dt$
$F'(x) = -t^3 + 4t - 1$

b) $F(x) = \int\limits_{x^3}^{5} (2e^u)du$
$F'(x) = 6x^2 e^{x^3}$

$$
\int\limits_{a}^{c} f(x)dx = \int\limits_{a}^{b} f(x)dx + \int\limits_{b}^{c} f(x)dx
$$