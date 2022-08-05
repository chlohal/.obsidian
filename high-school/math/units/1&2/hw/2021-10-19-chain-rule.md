1. $f(x) = sin(13x)^9$
	$f(x) = a(b(c(x)))$
	$a(x) = x^9$
	$b(x) = sin(x)$
	$c(x) = 13x$
	$c'(x) = 13$
	$b'(c(x)) = 13cos(13x)$
	$a'(b(c(x))) = 9sin(13x)^8 * 13cos(13x)$
2. $y = 6cos(e^{-0.5x})$
	$y = a(b(c(x)))$
	$a(x) = 6cos(x)$
	$b(x) = e^x$
	$c(x) = -0.5x$
	$c'(x) = -0.5$
	$b'(c(x)) = -0.5e^{-0.5x}$
	$a'(b(c(x))) = y' = -6sin(e^{-0.5x}) * -0.5e^{-0.5x}$
3. $y = (x^2 + 3x - 7)^{-5}$
	 $y = a(b(x))$
	 $a(x) = x^{-5}$
	 $b(x) = x^2 + 3x - 7$
	 $b'(x) = 2x + 3$
	 $a'(b(x)) = y' = -5(x^2 + 3x - 7)^{-6} * (2x + 3)$
4. $r(x) = ln(e^x) = x$
	$r(x) = 1$
5. $y = 3ln(cos(5x))$
	$y = 3 * a(b(c(x)))$
	$a(x) = ln(x)$
	$b(x) = cos(x)$
	$c(x) = 5x$
	$b'(c(x)) = -5sin(5x)$
	$a'(b(c(x))) = \frac{1}{cos(5x)} * -5sin(5x)$
	$y' = \frac{3}{cos(5x)} * -5sin(5x)$
6. $y = [cos(5x + 3)^4]^5 = cos(5x + 3)^20$
	$y = a(b(c(x)))$
	$a(x) = x^20$
	$b(x) = cos(x)$
	$c(x) = 5x + 3$
	$b'(c(x)) = -5sin(5x + 3)$
	$a'(b(c(x))) = 20cos(5x + 3)^19 * -5sin(5x + 3)$
7. $g(x) = 3 ln(cot(5x))$
	$g(x) = 3*a(b(c)))$
	$a(x) = ln(x)$
	$b(x) = cot(x)$
	$c(x) = 5x$
	$c'(x) = 5$
	$b'(c(x)) = -5csc(5x)^2$
	$a'(b(c(x))) = \frac{1}{cot(5x)} * -5csc(5x)^2$
	$g'(x) = \frac{-15csc(5x)^2}{cot(5x)}$
8. $u = 6ln(sin(x)^{0.5})$
	$u = 6 *a(b(c)))$
	$a(x) = ln(x)$
	$b(x) = x^{0.5}$
	$c(x) = sin(x)$
	$c'(x) = cos(x)$
	$b'(c(x)) = 0.5sin(x)^{-0.5} * cos(x)$
	$a'(b(c(x))) = \frac{1}{sin(x)^{0.5}} * 0.5sin(x)^{-0.5} * cos(x) = \frac{0.5cos(x)}{sin(x)}$
9. 
	1. cm^3 per cm
	2. $r(t) = 6t + 10$
	3. $r'(t) = 6$; this makes sense bc the units are cm/min, which is the same as what was given to us.
	4. $V(t) = \frac{4}{3}\pi(6t + 10)^3$
		$V'(t) = 4\pi(6x + 10)^2 * 6 = 24\pi(6x+10)^2$