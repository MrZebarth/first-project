input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("Message:" + receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Goodbye")
})
