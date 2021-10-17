radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -128 + distance * 11 && !(hot_cold)) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Skull)
    } else {
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < (-128 + (2 * 11))) {
            basic.showIcon(IconNames.SmallDiamond)
        } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < (-128 + (5 * 11))) {
            basic.showIcon(IconNames.Diamond)
        } else {
            basic.showIcon(IconNames.Square)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    distance += -1
    if (distance < 1) {
        distance = 1
    }
    basic.showNumber(distance)
})
input.onButtonPressed(Button.AB, function () {
    hot_cold = !(hot_cold)
})
input.onButtonPressed(Button.B, function () {
    distance += 1
    if (distance > 10) {
        distance = 10
    }
    basic.showNumber(distance)
})
let hot_cold = false
let distance = 0
distance = 5
radio.setGroup(0)
basic.showIcon(IconNames.Heart)
loops.everyInterval(1, function () {
    radio.sendNumber(0)
})
