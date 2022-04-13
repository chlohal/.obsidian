At time $t=0$, a potato is taken from a pot and left to cool. The internal temperature is $91$ degrees C at time $t=0$, and the internal temperature is greater than $27$ degrees C for all times $t>0$. The internal temperature of the potato at time $t$ can be modeled by the function $H$ that satisfies the differential equation $\frac{dH}{dt} -\frac{1}{4}(H-27)$, where $H(t)$ is measured in degrees C and $H(0)$ is 91.

1. Write an equation for the line tangent to the graph of H at $t=0$. Use this to approximate $H(3)$
	$\frac{dH}{dt} -\frac{1}{4}(H-27)$
	$\frac{dH}{dt} -\frac{1}{4}(91-27)$
	$\frac{dH}{dt} -\frac{1}{4}(64)$
	$\frac{dH}{dt} -16$
	$H = -16t + 91$
	$H = -16(3) + 91$
	$H = -48 + 91$
	$\boldsymbol{H = 43}$
2. Use $\frac{d^2H}{dt^2}$ to determine whether your answer is an underestimate or an overestimate.
	$\frac{d^2H}{dt^2} = -\frac{1}{4} \frac{dH}{dt}$
	$\frac{d^2H}{dt^2} = -\frac{1}{4} (-\frac{1}{4}(H - 27))$
	$\frac{d^2H}{dt^2} = \frac{1}{16}(H - 27)$
	**It is an underestimate, as $\frac{d^2H}{dt^2} > 0$ for all $t>0$, indicating that it is concave up.**
3. For $t<10$, an alternate model of the temperature is the function $G$ that satisfies the differential equation $\frac{dG}{dt} = -(G - 27)^{2/3}$ where $G(0) = 91$. Find an expression for $G(t)$. Based on this model, what is the temperature of the potato at $t=3$?
	$\frac{dG}{dt} = -(G - 27)^{2/3}$
	$(G - 27)^{-2/3} dG = -1 dt$
	$\int (G - 27)^{-2/3} dG = \int -1 dt$
	$3(G - 27)^{1/3}  = -t + C$
	$3(91 - 27)^{1/3}  = -0 + C$
	$3(64)^{1/3}  = 0 + C$
	$3(4) = 0 + C$
	$12 = 0 + C$
	$12 = C$
	$3(G - 27)^{1/3}  = -t + 12$
	$3(G - 27)  = (-t + 12)^{3}$
	$(G - 27)  = \frac{1}{3}(-t + 12)^{3}$
	$G(t)  = \frac{1}{3}(-t + 12)^{3} + 27$