let exit = false
let buttonPressed = false
let groupId = 0
let myId = Math.floor(Math.random() * 100000)
radio.setGroup(1);

function join() {
    basic.showString("Check for groups");
    for (let index = 0; index < 10000; index++) {
        for (let index = 0; index < 100000; index++) {
            radio.onReceivedValue(function (name, value) {
                if (name == "NewGroup") {
                    groupId = value;
                }
            });
            if (groupId != 0) {
                exit = true
                break;
            }
        }
        if (exit) {
            break;
        }
    }
    if (!exit)
    {
        basic.showString("New Group");
        groupId = myId;
        radio.sendNumber(0);
        for (let index = 0; index < 10000; index++) {
            for (let index = 0; index < 100000; index++) {
                radio.sendValue("NewGroup", myId);
            }
        }
    }
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
                join();
            }
            buttonPressed = false
        }
    }
}
