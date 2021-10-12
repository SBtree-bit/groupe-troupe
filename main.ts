radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < (-128 + (distance * 11))) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Skull)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
let distance = 0
distance = 5
radio.setGroup(0)
basic.showIcon(IconNames.Heart)
