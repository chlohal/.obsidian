# Managers

Our system breaks different responsibilities into separate "manager" classes. __All Managers extend `FeatureManager`__.

## MovementManager

The `MovementManager` is responsible for moving our robot. It controls the 4 main wheels. 

**Usage**

```java
MovementManager movementManager;
public void init() {
    movementManager = new MovementManager(
		hardwareMap.get(DcMotor.class, "fl"),
		hardwareMap.get(DcMotor.class, "fr"),
		hardwareMap.get(DcMotor.class, "bl"),
		hardwareMap.get(DcMotor.class, "br")
	);
}
```

**Notable Methods**

`driveOmni(float v, float h, float r)` - Drive using vertical, horizzontal, and rotational components.

## ManipulationManager

The `ManipulationManager` is responsible for moving all the motors that *aren't* on the main wheels. It also handles servo motors.

**Usage**

```java
ManipulationManager manipulationManager;
public void init() {
    manipulationManager = new ManipulationManager(hardwareMap,
		new String[] {}, //names of CR servos. Get this from the robot phone.
		new String[] {}, //names of servos. Get this from the robot phone.
		new String[] {}, //names of DC motors. Get this from the robot phone.
	);
}
```

**Notable Methods**

`setServoPower(String name, float power)` - Set the power of a servo, by its name. This and `setServoPosition` are similar; best practices depend on the hardware.

`setServoPosition(String name, float power)` - Set the *position* of a servo, by its name. This and `setServoPower` are similar; best practices depend on the hardware.

`setServoPower(String name, float power)` - Set the power of a servo, by its name