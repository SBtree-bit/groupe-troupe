radio.onReceivedNumber(function () {
    if ((radio.receivedPacket(RadioPacketProperty.SignalStrength) < (-128 + (distance * 11))) && !hot_cold) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Skull)
    }
})

radio.onReceivedNumber(function () {
    if (hot_cold) {
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < (-128 + (1 * 11))) {
            basic.showIcon(IconNames.SmallDiamond)
        } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < (-128 + (5 * 11))) {
            basic.showIcon(IconNames.Diamond)
        } else {
            basic.showIcon(IconNames.Square)
        }
    }
})

loops.everyInterval(1, function () {
    radio.sendNumber(0);
})

input.onButtonPressed(Button.A, function() {
    distance--
    if (distance < 1) {
        distance = 1
    }
    basic.showNumber(distance)
})

input.onButtonPressed(Button.B, function() {
    distance++
    if (distance > 10) {
        distance = 10
    }
    basic.showNumber(distance)
})

let distance = 0
let hot_cold = false
distance = 5
radio.setGroup(0)
basic.showIcon(IconNames.Heart)
