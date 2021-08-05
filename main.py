def on_received_number(receivedNumber):
    global registered, num_people
    if registered < 1:
        registered = 1
        num_people = receivedNumber
        radio.send_number(receivedNumber + 1)
        num_people += 1
    if registered >= 1 and 0 == num_people + 1:
        num_people += 1
    else:
        people.unshift(receivedNumber)
radio.on_received_number(on_received_number)

people: List[number] = []
num_people = 0
registered = 0
id2 = randint(0, 9999)
registered = 0
if input.light_level() > 100:
    radio.set_group(100)
else:
    radio.set_group(input.light_level())
music.play_melody("C D E F G A B C5 ", 150)

def on_forever():
    pass
basic.forever(on_forever)

def on_forever2():
    global people
    control.wait_micros(1000)
    radio.send_value("id", id2)
    for index in range(num_people):
        radio.send_string("" + str((people.remove_at(0))))
    people = [0]
basic.forever(on_forever2)
