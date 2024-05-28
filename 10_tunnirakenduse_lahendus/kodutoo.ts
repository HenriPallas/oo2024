class Calculator {

  private firstNumber: number = 0;
  private secondNumber: number = 0;
  private operator: string = '+';

  constructor(private firstNumberInput: HTMLInputElement, private secondNumberInput: HTMLInputElement, private operatorSelect: HTMLSelectElement, private resultDisplay: HTMLSpanElement) {
    this.firstNumberInput.addEventListener('input', () => this.updateResult());
    this.secondNumberInput.addEventListener('input', () => this.updateResult());
    this.operatorSelect.addEventListener('change', () => this.updateResult());
    this.updateResult();
  }

  private updateResult() {
    this.firstNumber = parseInt(this.firstNumberInput.value) || 0;
    this.secondNumber = parseInt(this.secondNumberInput.value) || 0;
    this.operator = this.operatorSelect.value;

    let result: number;
	
	if (this.operator === "+"){
		result = this.firstNumber + this.secondNumber;
	}
	else if (this.operator === "-"){
        result = this.firstNumber - this.secondNumber;
	}
	else if (this.operator === "*"){
        result = this.firstNumber * this.secondNumber;
	}
	else if (this.operator === "/"){
        if(this.secondNumber === 0){
			result = NaN;
		} else {
			result = this.firstNumber / this.secondNumber;
		}
	}
	
	if(isNaN(result)){
		this.resultDisplay.textContent = 'Error';
	} else {
		this.resultDisplay.textContent = result.toString();
	}
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const firstNumberInput = document.getElementById('firstNumber') as HTMLInputElement;
  const secondNumberInput = document.getElementById('secondNumber') as HTMLInputElement;
  const operatorSelect = document.getElementById('operator') as HTMLSelectElement;
  const resultDisplay = document.getElementById('result') as HTMLSpanElement;


  const calculator = new Calculator(firstNumberInput, secondNumberInput, operatorSelect, resultDisplay);
});