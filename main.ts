radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    if (registered < 1) {
        registered = 1
        num_people = receivedNumber
        radio.sendNumber(receivedNumber + 1)
        num_people += 1
    }
    
    if (registered >= 1 && 0 == num_people + 1) {
        num_people += 1
    } else {
        people.unshift(receivedNumber)
    }
    
})
let people : number[] = []
let num_people = 0
let registered = 0
let id2 = randint(0, 9999)
registered = 0
if (input.lightLevel() > 100) {
    radio.setGroup(100)
} else {
    radio.setGroup(input.lightLevel())
}

music.playMelody("C D E F G A B C5 ", 150)
basic.forever(function on_forever() {
    
})
basic.forever(function on_forever2() {
    
    control.waitMicros(1000)
    radio.sendValue("id", id2)
    for (let index = 0; index < num_people; index++) {
        radio.sendString("" + ("" + people.removeAt(0)))
    }
    people = [0]
})
