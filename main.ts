radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -128 + distance * 11) {
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})

input.onButtonPressed(Button.A, function () {
    distance--
    basic.showNumber(distance)
    if (distance < 1) {
        distance = 1
    }
})
input.onButtonPressed(Button.B, function() {
    distance++
    basic.showNumber(10 - distance);
    if (distance > 10) {
        distance = 10
    }
})

let distance = 0
distance = 3
radio.setGroup(0)
basic.showIcon(IconNames.Heart)
let hot_cold = false

basic.forever(function () {
    radio.sendNumber(0)
    if (hot_cold) {
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) <= -95) {
            basic.showIcon(IconNames.SmallDiamond)
        } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) <= -80) {
            basic.showIcon(IconNames.Diamond)
        } else {
            basic.showIcon(IconNames.Square)
        }
    }
})
