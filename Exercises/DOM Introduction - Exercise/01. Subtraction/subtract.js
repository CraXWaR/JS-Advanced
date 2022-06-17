function subtract() {
    //console.log('TODO:...');
    let firstNum = document.getElementById('firstNumber').value;
    firstNum = Number(firstNum)
    let secondNum = document.getElementById('secondNumber').value
    secondNum = Number(secondNum)
    let result = document.getElementById('result')

    result.textContent = firstNum - secondNum
}
