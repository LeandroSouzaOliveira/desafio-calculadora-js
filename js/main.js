const inputNumberFields = document.querySelectorAll('.form-input');

inputNumberFields.forEach(inputField => {
    inputField.addEventListener('input', handleInputFieldInput);
    inputField.addEventListener('keydown', handleInputFieldKeyDown);
});

const inputNumberOne = document.querySelector("#number1");
inputNumberOne.addEventListener('keyup', handleinputNumberOneKeyUp);

const inputNumberTwo = document.querySelector("#number2");
inputNumberTwo.addEventListener('keyup', handleinputNumberTwoKeyUp);

inputNumberOne.addEventListener('keyup', updateSum);
inputNumberTwo.addEventListener('keyup', updateSum);

const btnSum = document.querySelector("#btn-plus");
btnSum.addEventListener('click', handleBtnSumClick);

const btnTimes = document.querySelector('[id="btn-times"]');
btnTimes.addEventListener('click', handleBtnTimesClick);

const btnClear = document.querySelector('[id="btn-clear"]');
btnClear.addEventListener('click', handleBtnClearClick);

function handleInputFieldKeyDown(event) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete', 'Enter'];

    if (!allowedKeys.includes(event.key) && !isNumericInput(event.key)) {
        event.preventDefault();
    }
}

function isNumericInput(key) {
    return (key >= '0' && key <= '9') || key === '.' || key === ',';
}

function handleInputFieldInput(event) {
    const inputValue = parseDecimalInput(event.target.value);

    if (isNaN(inputValue) || inputValue < 0) {
        event.target.value = '';
    }
}

function parseDecimalInput(input) {
    // Substitui vírgulas por pontos para lidar com ambos os formatos (5,25 ou 5.25)
    const normalizedInput = input.replace(',', '.');
    return parseFloat(normalizedInput);
}

function handleinputNumberOneKeyUp(event) {
    return parseFloat(event.target.value) || 0;
}

function handleinputNumberTwoKeyUp(event) {
    return parseFloat(event.target.value) || 0;
}

function handleBtnSumClick(event) {
    const resultInput = document.querySelector("#result-input");
    resultInput.value = updateSum();
}

function updateSum() {
    const valueOne = parseDecimalInput(inputNumberOne.value) || 0;
    const valueTwo = parseDecimalInput(inputNumberTwo.value) || 0;
    return valueOne + valueTwo;
}

function handleBtnTimesClick(event) {
    const resultInput = document.querySelector("#result-input");
    resultInput.value = updateTimes();
}

function updateTimes() {
    const valueOne = parseDecimalInput(inputNumberOne.value) || 1;
    const valueTwo = parseDecimalInput(inputNumberTwo.value) || 1;
    return valueOne * valueTwo;
}

function handleBtnClearClick(event) {
    inputNumberOne.value = '';
    inputNumberTwo.value = '';
    const resultInput = document.querySelector("#result-input");
    resultInput.value = 0;
}