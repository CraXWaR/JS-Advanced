function calculator() {
    // TODO:
    let x;
    let y;
    let result;

    let calculator = {
        init(selector, selector2, resultSelector) {
            x = document.querySelector(selector);
            y = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add() {
            result.value = Number(x.value) + Number(y.value);
        },
        subtract() {
            result.value = Number(x.value) - Number(y.value);
        },
    };

    return calculator;
}




