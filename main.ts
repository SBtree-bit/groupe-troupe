radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -128 + distance / 11) {
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
distance = 5
radio.setGroup(0)
basic.showIcon(IconNames.Heart)
loops.everyInterval(1, function () {
    radio.sendNumber(0)
})
