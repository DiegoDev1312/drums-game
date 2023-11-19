const allKeys = document.querySelectorAll('[data-key]');
const button = document.querySelector('button');
const input = document.querySelector('input');

const keySounds = {
    'Q': '../../sounds/keyq.wav',
    'W': '../../sounds/keyw.wav',
    'E': '../../sounds/keye.wav',
    'A': '../../sounds/keya.wav',
    'S': '../../sounds/keys.wav',
    'D': '../../sounds/keyd.wav',
    'Z': '../../sounds/keyz.wav',
    'X': '../../sounds/keyx.wav',
    'C': '../../sounds/keyc.wav',
};
const acceptKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

function playSound(keyPressed) {
    if (acceptKeys.includes(keyPressed)) {
        for (let keyboardValue of allKeys) {
            if (keyboardValue.attributes['data-key'].value === keyPressed) {
                keyboardValue.classList.add('pressed-key');
                setTimeout(() => {
                    keyboardValue.classList.remove('pressed-key');
                }, 100);
            }
        }
        const audio = new Audio(keySounds[keyPressed]);
        audio.play();
    }
}

function handleKeyPress(e) {
    const keyPressed = e.key.toUpperCase();
    playSound(keyPressed);
}

function handleButtonPress() {
    if (!input.value) {
        return alert('Informe a composição!');
    }

    let wait = 0;
    const inputValuesToArray = input.value.split('');

    for (let value of inputValuesToArray) {
        setTimeout(() =>  {
            playSound(value.toUpperCase());
        }, wait);

        wait += 250;
    }
}

window.addEventListener('keydown', handleKeyPress);
button.addEventListener('click', handleButtonPress);
