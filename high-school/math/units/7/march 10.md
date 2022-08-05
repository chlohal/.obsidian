## Warm-Up
1) $\ln(3x^2) = \ln(3) + 2\ln(x)$
2) $4x$
3) $x^3 + e^5$


Create the slope field for the differential equation $\frac{dy}{dx} = -\frac{x}{y}$
![[Pasted image 20220310130241.png]]

## Steps to Find the General Solution to a DIfferential Equation

1) Algebraically simplify so each symbol is on its own side. $y dy = -x dx$
2) Integrate both sides (remember to add the $+C$!) $\int y dy = -\int x dx$
3) $0.5y^2 + C = -(0.5x^2 + C)$
4) $y^2 = x^2 + C$

### Example 2

Find the general solution to $\frac{dy}{dx} = -xy$

$\frac{dy}{y} = -x dx$
$\frac{1}{y} dy = -x dx$
$\int \frac{1}{y} dy = \int -x dx$
$\ln(|y|) = -0.5x^2 + C$
$|y| = e^{-0.5x^2 + C}$
$|y| = e^{-0.5x^2}e^C$
$y = \pm Ce^{-0.5x^2}$
$y = \pm e^{-0.5x^2}e^C$

### Example 3

Find the particular solution to the differential equation $\frac{dy}{dx} = \frac{4e^x}{y}$ given $y(0) = 2$

$\int y dy = \int 4e^x$
$0.5y^2 = 4e^x + C$
$0.5y^2 = 4e^x + C$

$0.5(2)^2 = 4e^{0} + C$
$2 = 4e^{0} + C$
$2 = 4e^{0} + C$
$C = -2$

$0.5y^2 = 4e^x - 2$

$y^2 = 8e^x - 4$
$y = \pm\sqrt{4(e^x - 1)}$
$y = \sqrt{4(e^x - 1)}$

### Example 4

Find $\frac{dy}{dt} = 2ty$ where $y(0) = e$


$\frac{dy}{y} = 2y dt$
$\frac{dy}{y} = 2t dt$
$\ln(|y|) = t^2$

$\ln(|y|) = t^2 + C$
$1 = 0^2 + C$
$C = 1$

$\ln(|y|) = t^2 + 1$
$y = \pm e^{t^2 + 1}$

$y = \pm e^{t^2 + 1}$
$y = \pm e^{t^2}e^1$
$y = \pm e^{t^2}e$

$y = e^{t^2}e$
$y = e^{t^2+1}$

### Example 5

$\frac{dy}{dx} = 3x^2e^{-2y}$; $y(1) = 4$

$\frac{dy}{e^{-2y}} = 3x^2 dx$
$e^{2y} dy = 3x^2 dx$
$0.5e^{2y} = x^3 + C$

$0.5e^{8} = 1 + C$
$e^{8} = 2 + 2C$
$8 = \ln(2 + 2C)$
$8 = \ln(2) * \ln(2C)$
$8 = \ln(2) * \ln(2C)$

$e^{2y} = 2x^3 + 2C$
$2y = \ln(2x^3) * \ln(2C)$
$y = \frac{\ln(2x^3 + e^8 - 2)}{2}$

### Example 6





