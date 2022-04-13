AROC is the rate **over an interval**

## AROC

Average rate is the rate over an **interval**.
Graphically, this rate is represented by the slope of the secant line
Algebraically you find this rate (over `[a, a+h]`) by: `(f(a+h) - f(a)) / (a+h)`

## IROC

Instantaneous rate is the rate at a **single point**
Graphically, this rate is represented by the slope of the tangent line.
You find this rate at `a` by finding the limit of the AROC as `h->0`

*Instantaneous rate is the limit of the average rates. The Instantaneous rate for a function $a(x)$ is called the __derivative__ of a function and can be written as $f'(a)$*


## Examples

1) If $f(x) = x^2 - 3x - 4$, find the instantaneous rate of $f(x)$ at $x = 6$ (also known as the derivative of $f(x)$ at $x = 6$ or, simply, $f'(6)$)
    $f'(6) = lim_{x->6}: (f(x) - f(6)) / (x - 6)$
	             $= lim_{x->6}: (x^2 - 3x - 4 - 14) / (x - 6)$
				 $= lim_{x->6}: (x^2 - 3x - 4 - 18) / (x - 6)$
				 $= lim_{x->6}: ((x-6)(x+3)) / (x - 6)$
				 $= lim_{x->6}: (x+3) = 9$
So $f'(6) = 9$

2) $f'(6) = lim_{h->0}: (f(6+h) - f(6))/h$
                  $= lim_{h->0}: ((6+h)^2 - 3(6+h) - 4 - 14)/h$
				  $= lim_{h->0}: ((6+h)^2 - 3(6+h) - 18)/h$
				  $= lim_{h->0}: (36 + h^2 + 12h - 3(6+h) - 18)/h$
				  $= lim_{h->0}: (h^2 + 12h - 3(6+h) + 18)/h$
				  $= lim_{h->0}: (h^2 + 12h - 18 - 3h + 18)/h$
				  $= lim_{h->0}: (h^2 + 12h - 3h)/h$
				  $= lim_{h->0}: (h^2 + 9h)/h$
				  $= lim_{h->0}: h(h + 9)/h$
				  $= lim_{h->0}: (h + 9)$
				  $= lim_{h->0}: (h + 9) = 9$
				  
## Definition of Derivative to get a FUNCTION

$f'(x) = lim_{h->0} (f(x+h)-f(x))/h$

