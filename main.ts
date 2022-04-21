input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        let y = 0
        led.toggle(x, y)
        led.toggle(0, x)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let y = 0; y <= 4; y++) {
        let x = 0
        led.toggle(4 - x, 4 - y)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.toggle(4 - x, 4 - y)
            basic.pause(100)
        }
    }
})
basic.forever(function () {
	
})
