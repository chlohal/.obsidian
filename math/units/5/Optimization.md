# Example: Enclosing a garden with fencing

One side is covered by a shed; fencing is needed for the other 3 sides. If you have 60 feet of fencing, what is the area of the largest garden you can enclose?

## Steps
1) Write an equation for the quantity you want to maximize/minimize: $A = lw$
2) Use a constraint to find relationships between the variables: $2w + l = 60$
3) Rewrite your quantity equation in terms of one variable: $l = 60 - 2w$
	$A = w(60 - 2w)$
	$A = 60w - 2w^2$
4) Identify critical values and use the candidates test to find extrema
	$A' = 60 - 4w$
	$0 = 60 - 4w$
	$60 = 4w$
	$w = 15$
	Try endpoints-- if all 60 goes to w, l will be 0; if all 60 goes to l, w will be 0.
5) Calculate the result using the quantity equation: $A = 15(60 - 2*15)$
	$A = 15(60 - 30)$
	$A = 15*30$
	$A = 450$
6) Write a result that directly answers the question: **The area of the garden is 450ft^2**

# Example 2: Maximuzing a Box

We want to design an open box that has a square base and a total surface area of $108{in}^2$ that provides the largest possible storage capacity (_volume_). Identify the dimensions that will maximuze the volume of the box.

$V = x^2y$

$x^2 + 4xy = 108$
$y = \frac{108 - x^2}{4x}$

$V = x^2\frac{108 - x^2}{4x}$
$V = x0.25(108 - x^2)$
$V = 27x - 0.25x^3$
$V = -0.25x^3 + 27x$

$V' = -0.75x^2 + 27$

$0 = 0.75x^2 + 27$
$27 = 0.75x^2$
$36 = x^2$
$6 = x$

|X|Y|V|
|-|-|-|
|0| |0|
| |0|0|
|6|$\frac{108 - 36}{24} = 3$|108|


# Example 3: Parabola
The equation $y=x^2+3x-5$ represents a parabola. Name the point on the parabola closest to the origin.

Minimize $d = \sqrt{x^2 + y^2}$

$y = x^2+3x-5$
$d = \sqrt{x^2 + (x^2+3x-5)^2}$
$d' = 0.5\frac{1}{\sqrt{x^2 + (x^2+3x-5)^2}}(2x + 2(x^2+3x-5)((2x+3))$
$d' = 0.5\frac{1}{\sqrt{x^2 + (x^2+3x-5)^2}} 2(x + (x^2+3x-5)((2x+3))$
$d' = \frac{1}{\sqrt{x^2 + (x^2+3x-5)^2}}(x + (x^2+3x-5)(2x+3))$
$d' = \frac{x + (x^2+3x-5)(2x+3)}{\sqrt{x^2 + (x^2+3x-5)^2}}$



