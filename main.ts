let exit = false
let buttonPressed = false
let groupId = 0
let myId = Math.floor(Math.random() * 100000)

function join() {
    radio.onReceivedValue(function (name, value) {
        groupId = value;
    });
}

while (true) {
    let joinGroup = 0
    if (!(joinGroup)) {
        if (input.buttonIsPressed(Button.A) && !(buttonPressed)) {
            buttonPressed = true
            for (let index = 0; index < 500; index++) {
                for (let index = 0; index < 100000; index++) {
                    if (!(input.buttonIsPressed(Button.A))) {
                        exit = true
                        break;
                    }
                }
                if (exit) {
                    break;
                }
            }
            if (!(exit)) {
                basic.showString("A")
                join()
            }
            buttonPressed = false
        }
    }
}
