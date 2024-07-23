'use strict';

let selectedOperation = '';
const buttons = document.querySelectorAll('button');
function recolorButton(but) {
    buttons.forEach(button => {
        button.classList.replace('button-active', 'button-background');
    });
    const butt = '.' + but;
    const button = document.querySelector(butt);
    console.log(button);
    button.classList.replace('button-background', 'button-active');
    selectedOperation = but;
    return selectedOperation;
};

function submitForm() {
    let result;
    const input1 = parseFloat(document.querySelector('.input1').value);
    const input2 = parseFloat(document.querySelector('.input2').value);
    if (isNaN(input1) || isNaN(input2)) {
        result = 'Введите число';
    } else {
        switch (selectedOperation) {
            case 'buttonSum':
                result = input1 + input2;
                break;
            case 'buttonMin':
                result = input1 - input2;
                break;
            case 'buttonMultip':
                result = input1 * input2;
                break;
            case 'buttoтDivis':
                result = input1 / input2;
                break;
            default:
                result = 'Выберете операцию';
                break;
        };
    };
    if (result === Infinity) {
        result = 'Бесконечность';
    }
    document.querySelector('.answer').innerText = result;
    if (!isNaN(input1) && !isNaN(input2) && result != 'Выберете операцию') {
        buttons.forEach(button => {
            button.classList.replace('button-active', 'button-background');
        });
        document.querySelector('.input1').value = '';
        document.querySelector('.input2').value = '';
        selectedOperation = null;
    }
};  