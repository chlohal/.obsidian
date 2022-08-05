$$(\lim_{x->c} \frac{f(x)}{g(x)} = \frac{0}{0} {or} \lim_{x->c} \frac{f(x)}{g(x)} = \frac{\infty}{\infty})
{and} 
\lim_{x->c} \frac{f'(x)}{g'(x)} = L \to
\lim_{x->c} \frac{f(x)}{g(x)} = L$$


**Example 1**
Evaluate $lim_{x->1} \frac{x^2 + 2x - 3}{ln(x)}$
$1^2 + 2*(1) - 3 = 1+2-3 = 0$
$ln(1) = 0$
This yields the inteterminate form.


**Example 2**

Evaluate $lim_{x->1} \frac{5ln(x)}{x-1}$

$5ln(1) = 5*0 = 0$
$1 - 1 = 0$

$lim_{x->1} \frac{5\frac{1}{x}}{1}$
$lim_{x->1} \frac{\frac{5}{x}}{1}$
$lim_{x->1} 5x$
$lim_{x->1} 5$

**Example 3**

$lim_{x->0} \frac{e^x - e^{-x}}{x}$

$e^0 - e^{-0} = e^0 - e^0 = 1 - 1 = 0$
$0 = 0$
This limit produces the indeterminate form.
$lim_{x->0} \frac{e^x - -e^{-x}}{1}$
$lim_{x->0} \frac{e^x + e^{-x}}{1}$
$lim_{x->0} \frac{e^0 + e^{-0}}{1}$
$lim_{x->0} \frac{e^0 + e^0}{1}$
$lim_{x->0} \frac{1 + 1}{1}$
$lim_{x->0} \frac{2}{1}$
$lim_{x->0} 2$

**Example 4**

Evaluate $\lim_{x->\infty} \frac{x^3 - 5x^2 + 13x - 21}{4x^3 + 9x^2 - 11x - 17}$

$\lim_{x->\infty} \frac{x^3 - 5x^2 + 13x - 21}{4x^3 + 9x^2 - 11x - 17}$

$\infty^3 = \infty$
$4\infty^3 = \infty$

This limit produces the indeterminate form $\frac{\infty}{\infty}$

$\lim_{x->\infty} = \frac{3x^2 - 10x + 13}{12x^2 + 18x - 11}$

This limit produces the indeterminate form $\frac{\infty}{\infty}$

$\lim_{x->\infty} = \frac{6x - 10}{24x + 18}$

This limit produces the indeterminate form $\frac{\infty}{\infty}$

$\lim_{x->\infty} = \frac{6}{24}$
$\lim_{x->\infty} = \frac{1}{4}$

