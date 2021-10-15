radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < (-128 + (distance * 11))) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Skull)
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
distance = 5
radio.setGroup(0)
basic.showIcon(IconNames.Heart)
