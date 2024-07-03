let ampelSignalWert = 0
let ampelRotPED = 0
let ampelGruenPED = 0
let ampelRot = 0
let ampelGelb = 0
let ampelGruen = 0
/**
 * p0 strasse rot
 */
input.onButtonPressed(Button.A, function () {
    ampelSignalWert = 1
})
basic.forever(function () {
    ampelRotPED = 1
    ampelGruenPED = 0
    ampelRot = 1
    ampelGelb = 0
    ampelGruen = 0
    if (ampelSignalWert == 1) {
        ampelGruenPED = 1
        ampelRotPED = 0
        ampelSignalWert = 0
    }
    basic.pause(10000)
    ampelGruenPED = 0
    ampelRot = 1
    if (input.buttonIsPressed(Button.A)) {
        ampelSignalWert = 1
    }
    basic.pause(5000)
    ampelRot = 1
    ampelGelb = 1
    ampelGruen = 0
    basic.pause(1250)
    ampelRot = 0
    ampelGelb = 0
    ampelGruen = 1
    basic.pause(15000)
    ampelRot = 0
    ampelGelb = 1
    ampelGruen = 0
    basic.pause(1750)
})
basic.forever(function () {
    if (ampelRot == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    if (ampelGelb == 0) {
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    if (ampelGruen == 0) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
basic.forever(function () {
    if (ampelSignalWert == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (ampelSignalWert == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (ampelRotPED == 0) {
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
    if (ampelGruenPED == 0) {
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
})
