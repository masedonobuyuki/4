input.onButtonPressed(Button.A, function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 75)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 200)
    basic.pause(1000)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
})
input.onButtonPressed(Button.B, function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 200)
    SuperBit.MotorRun(SuperBit.enMotors.M1, -200)
    basic.pause(1000)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
})
SuperBit.Servo2(SuperBit.enServo.S1, 135)
basic.forever(function () {
	
})
