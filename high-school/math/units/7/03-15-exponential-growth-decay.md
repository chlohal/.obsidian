## Warm Up

$\frac{dy}{dx} = 3x^2y$

1) Write the equation of the line tangent to $y$ at $(3, -1)$
	$y - 1 = -27(x - 3)$
2) Show that $\frac{d^2y}{dy^2} = 6xy + 9x^4y$
	$3x^2y$
	$6x y + 3x^2 \frac{dy}{dx}$
	$6x y + 3x^2 3x^2y$
	$6x y + 9x^4 y$
3) 
    $\frac{dy}{dx} 3x^2y$
	$\int \frac{1}{y} dy = \int 3x^2 dx$
	$\ln(|y|) = x^3 + C$
	$\ln(|y|) = x^3 + C$
	$\ln(|-1|) = 3^3 + C$
	$\ln(|-1|) = 27 + C$
	$\ln(1) = 27 + C$
	$1 = e^{27 + C}$
	$1 = Ce^{27}$
	$1 = Ce^{27}$
	$C = \frac{1}{e^{27}}$
	$\ln(|y|) = x^3 + \frac{1}{e^{27}}$
	$y =  \frac{1}{e^{27}} e^{x^3}$
	
## Exponential Growth and Decay

When the rate of change of $y$ is directly proportional to $y$,

$$
\frac{dy}{dt} = ky
$$

It's growth when $k>0$, or decay when $k<0$.

Solve the general differential equation $\frac{dy}{dt} = ky$.

$\frac{dy}{y} = k dt$
$\ln(|y|) = kt$
$\ln(|y|) = kt + C$
$|y| = e^{kt + C}$
$y = \pm Ce^{kt}$
	
## Example 1

A rumor spreads on Twitter. The rate of increaase in the # of people who hear the rumor is proportional to the number who know.

At first, 10 people knew. After 20 hours, 1000 people know. How long until 36000 know?

$\frac{dR}{dt} = kR$
$R = \pm Ce^{kt}$
$R(t) = \pm Ce^{kt}$

$R(0) = \pm Ce^{k 0}$
$10 = \pm Ce^{k 0}$
$C = 10$
$R(t) = \pm 10e^{k t}$

$1000 = \pm 10e^{k 20}$
$100 = \pm e^{k 20}$
$\ln(100) = k 20$
$0.05\ln(100) = k$

$R(t) = \pm 10e^{0.23 t}$

$3600 = \pm 10e^{0.23 t}$
$8.18 = 0.23 t$
$t = 35.56$ hours

## Example 2

A dose of 400mg of a drug is administered to a patient. After 2 hours, appx 376.7mg remain. 

$A(t) = \pm 400e^{-kt}$
$376.7 = \pm 400e^{-2k}$
$376.7 = \pm 400e^{-2k}$
$0.94175 = e^{-2k}$
$-0.0600 = -2k$
$0.0600 = -2k$
$-0.0300 = k$
$A(t) = \pm 400e^{0.03t}$
