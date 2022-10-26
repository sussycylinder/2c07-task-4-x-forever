let xvalue = 0
let yvalue = 0
input.onButtonPressed(Button.A, function () {
    xvalue = 0
    while (xvalue <= 4) {
        led.plot(xvalue, 0)
        basic.pause(500)
        basic.clearScreen()
        xvalue += 1
    }
})
input.onButtonPressed(Button.B, function () {
    yvalue = 0
    while (yvalue <= 4) {
        led.plot(0, yvalue)
        basic.pause(500)
        basic.clearScreen()
        yvalue += 1
    }
})
