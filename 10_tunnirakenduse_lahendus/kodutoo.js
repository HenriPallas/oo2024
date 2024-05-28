var Calculator = /** @class */ (function () {
    function Calculator(firstNumberInput, secondNumberInput, operatorSelect, resultDisplay) {
        var _this = this;
        this.firstNumberInput = firstNumberInput;
        this.secondNumberInput = secondNumberInput;
        this.operatorSelect = operatorSelect;
        this.resultDisplay = resultDisplay;
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.operator = '+';
        this.firstNumberInput.addEventListener('input', function () { return _this.updateResult(); });
        this.secondNumberInput.addEventListener('input', function () { return _this.updateResult(); });
        this.operatorSelect.addEventListener('change', function () { return _this.updateResult(); });
        this.updateResult();
    }
    Calculator.prototype.updateResult = function () {
        this.firstNumber = parseInt(this.firstNumberInput.value) || 0;
        this.secondNumber = parseInt(this.secondNumberInput.value) || 0;
        this.operator = this.operatorSelect.value;
        var result;
        if (this.operator === "+") {
            result = this.firstNumber + this.secondNumber;
        }
        else if (this.operator === "-") {
            result = this.firstNumber - this.secondNumber;
        }
        else if (this.operator === "*") {
            result = this.firstNumber * this.secondNumber;
        }
        else if (this.operator === "/") {
            if (this.secondNumber === 0) {
                result = NaN;
            }
            else {
                result = this.firstNumber / this.secondNumber;
            }
        }
        if (isNaN(result)) {
            this.resultDisplay.textContent = 'Error';
        }
        else {
            this.resultDisplay.textContent = result.toString();
        }
    };
    return Calculator;
}());
document.addEventListener('DOMContentLoaded', function () {
    var firstNumberInput = document.getElementById('firstNumber');
    var secondNumberInput = document.getElementById('secondNumber');
    var operatorSelect = document.getElementById('operator');
    var resultDisplay = document.getElementById('result');
    var calculator = new Calculator(firstNumberInput, secondNumberInput, operatorSelect, resultDisplay);
});
