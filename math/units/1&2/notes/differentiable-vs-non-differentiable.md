# Differentiable-ness
A **cusp** is when a graph makes a sharp turn (like a cusp node in Inkscape)
Differentiableness is a property at a point. If a line makes a sharp turn (e.g. $y=|x|$ at $x=0$), then the line is not differentiable at x=0.

1. A roller coaster is fun when it turns quickly
2. A roller coaster is safe when it doesn't turn *too* quickly
3. $x=-3$; yes
4. $x=-2$; no
5. $x=1$; no
6. `b` and `d` are unsafe 

## Calculus Definition
If the **one-sided limits of the derivatives are equal** then it is differentiable. It's more or less "continuity of the derivative"

Differentiability implies continuity. If $f'(x)$ is continuous at $x=a$, then $f(x)$ is continuous at $x=a$ as well.

$\exists a \in [b,c] : lim_{x->a}f'(x)$
$\exists a \in [b,c] : lim_{x->a}f'(x) \implies \exists d \in [b,c] : lim_{x->d}f(x)$

1. $x=2$; $\not\exists : lim_{x->2}f'(x)$
2. $x=0$; $\not\exists : lim_{x->0}f'(x)$
3.  $x=a$; $\not\exists : lim_{x->a}f'(x)$
4.  No; $\not\exists : lim_{x->a}f(x)$
5.  No; $\not\exists : lim_{x->a}f(x)$
6.  It is 0; it does not form a cusp
7.  It is undefined; it forms a cusp