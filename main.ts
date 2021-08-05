radio.onReceivedNumber(function (receivedNumber) {
    if (joining == true) {
        group.id = receivedNumber;
        radio.setGroup(group.id)
        radio.sendNumber(Id)
        radio.onReceivedNumber(function (receivedNumber) {
            group.members[group.members.length] = receivedNumber;
        })
    }
})
radio.onReceivedString(function (receivedString) {
    joining = true
})
let joining = false
let Id = 0
Id = Math.floor(Math.random() * 254 + 1);
basic.showNumber(Id);
let group = {
    id: 0,
    members: [Id]
}
radio.setGroup(1)
while (true) {
    if (input.buttonIsPressed(Button.A) && group.id == 0) {
        group.id = Id;
        radio.setTransmitPower(2)
        radio.sendString("NewGroup")
        radio.sendNumber(group.id)
        radio.setGroup(group.id)
        radio.onReceivedNumber(function (receivedNumber) {
            group.members[group.members.length] = receivedNumber;
            basic.showNumber(receivedNumber)
        })
    }
}
