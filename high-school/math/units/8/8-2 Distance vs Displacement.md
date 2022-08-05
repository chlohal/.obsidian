## Warm Up

1. $0 = 100*0.8^t-30$
	$30 = 100*0.8^t$
	$0.3 = 0.8^t$
	$0.3 = 0.8^t$
	$t = 5.396$
2. $\int\limits_{0}^{5.396} v_c(t) dt$
	$\int\limits_{0}^{5.396} [100*0.8^t-30] dt$
	UPstream: $151.8$
	$\int\limits_{5.396}^{10} v_c(t) dt$
	$\int\limits_{5.396}^{10} [100*0.8^t-30] dt$
	DOWNstream: $51.811$
	Total Movement: $203.6$
3. $151.8 - 51.811 = 99.989$ He is upstream of his starting point
4. $\int\limits_{0}^{10} v_c(t) dt$
5. $\int\limits_{0}^{10} |v_c(t)| dt$

## Difference (not in a math way) between Distance and Displacement

A bee makes several trips from a hive to a flower garden. The velocity graph is shown. What is the total distance traveled by the bee? What is the displacement of the bee?

Total distance: 700ft
Displacement: -100ft

Given velocity, $v(t)$; the **total distance traveled** is $\int\limits_{a}^{b} |v(t)| dt$ and the **displacement** is $\int\limits_{a}^{b} v(t) dt$.

## Example 1

A particle moves along the x-axis so that the acceleration at any time $t$ is given by $a(t) = 6t - 18$. At time $t=0$, the velocity is $v(0) = 24$, and at time $t=1$, the position is $x(1) = 20$.

1. $3t^2 - 18t + 24$
2. $3t^2 - 18t + 24 = 3(t^2 - 6t + 8) = 3(t - 4)(t - 2)$; $t=4$ and $t=2$
3. $t^3 - 9t^2 + 24t + 4$
4. $\int_{1}^{3}|v(t)|dt$
5. $16+6+2=24$
6. $20-4 = 16$
