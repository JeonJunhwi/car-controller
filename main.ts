input.onButtonPressed(Button.A, function () {
    radio.sendString("honk")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("stop")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("turn left")
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("forward")
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("backward")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("grab")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("turn right")
})
radio.setGroup(1)
