Consider the differential equation $\frac{dy}{dx} = (3-y) \cos(x)$. Let $y = f(x)$ be the particular solution to the differential equation with the initial condition $f(0) = 1$. The function $f$ is defined for all real numbers.

1) A portion of the slope field of the differential equation is given below. Sketch the solution curve through the point $(0,1)$.
	
	```desmos-graph
	y=2\sin(x)+1
	```

2) Write an equation for the line tangent to the solution curve in part (a) at the point (0,1). Use the equation to approximate $f(0.2)$.
	
	$y + y_1 = m(x - x_1)$
	$y + 1 = m(x - 0)$
	
	$m = \frac{dy}{dx} = (3 - y) \cos(x)$
	$m = \frac{dy}{dx} = (3 - 1) \cos(0)$
	$m = \frac{dy}{dx} = (2) 1$
	$m = \frac{dy}{dx} = 2$
	
	$y + 1 = 2(x - 0)$
	### line: $y = 2(x - 0) + 1$
	
	$y(0.2) = 2(0.2 - 0) + 1$
	$y(0.2) = 2(0.2) + 1$
	$y(0.2) = 0.4 + 1$
	### approximation: $y(0.2) = 1.4$
	
3) Find $y=f(x)$, the particular solution to the differential equation with the initial condition $f(0) = 1$.
	$\frac{dy}{dx} = (3-y) \cos(x)$
	$dy = (3-y) \cos(x) dx$
	$\frac{1}{3-y} dy =\cos(x) dx$
	$\frac{1}{3-y} dy =-\sin(x) dx$
	$-\ln(|3 - y|) =-\sin(x) + C$
	$-\ln(|3 - y|) =-\sin(x) + C$
	$-|3 - y| =e^{-\sin(x) + C}$
	$3 - y = \pm e^{-\sin(x) + C}$
	$3 - y =  \pm e^{-\sin(x) + C}$
	$2 = \pm e^{-\sin(0) + C}$
	$2 = \pm e^{-\sin(0) + C}$
	$1 = e^{-\sin(0) + 0}$
	### solution: $y = -2e^{-\sin(x)}$
	
	
## Example 6

If a small villiage's population ***P*** is currently 1000 people and growing at a rate of 5% per year. We can represent this with the differential equation: $\frac{dP}{dt} = 0.05P$

Solve the equation to find the function that models population as a function of time ***P(t)*** using the initial condition of ***P(0) = 1000***

$dP P^{-1} = 0.05 dt$
$\ln(|P|) = 0.05t + C$

$\ln(|P|) = 0.05t + C$
$|1000| = Ce^{0.05t}$
$|1000| = Ce^{0}$
$|1000| = 1000e^{0}$

$P(t) = 1000e^{0.05t}$

## Example 7

You've run over a nail and the rate of change of the air pressure in your tire is directly proportional to the pressure of the tire, in pounds per square inch. Let ***P*** represent pressure and ***t*** represent time in minutes. The tire's air pressure is 35 PSI at the time you run over the nail and about 32.3 psi 10 minutes later.

$t = 0 \implies P = 35$
$t = 10 \implies P = 32.3$

$\frac{dP}{dt} = KP$
$\frac{dP}{dt} = KP$
$\frac{dP}{dt} = KP$

$\frac{1}{P}dP = K dt$
$\ln(|P|) = Kt$
$|P| = Ce^{Kt}$
$|P| = Ce^{Kt}$
$|35| = Ce^{K0}$
$C = 35$
$P = \pm 35e^{Kt}$

$32.3 = \pm 35e^{10K}$
$32.3 = 35e^{10K}$
$\frac{32.3}{35} = e^{10K}$
$\ln(\frac{32.3}{35}) = 10K$
$0.1\ln(\frac{32.3}{35}) = K$
$-0.008 = K$

$P = 35e^{-0.008t}$

If the car is safe to drive while tire pressure exceeds 12PSI, about how much time do you have?

$35e^{-0.008t} > 12$
$35e^{-0.008t} > 12$
$35e^{-0.008t} > 12$
$t_{\max} = 133.805$