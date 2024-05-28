import {Calculator3} from "../k3";

let calc:Calculator3=null;

beforeEach(() => {
    calc=new Calculator3();
});

test('addition', () => {
    expect(calc.add(2,5)).toBe(7);
    expect(calc.add(0,5)).toBe(5);
    expect(calc.add(10,0)).toBe(10);
});

test('subtraction', () => {
    expect(calc.subtract(2,5)).toBe(-3);
    expect(calc.subtract(0,5)).toBe(-5);
    expect(calc.subtract(10,0)).toBe(10);
});

test('multiplication', () => {
    expect(calc.multiply(2,5)).toBe(10);
    expect(calc.multiply(0,5)).toBe(0);
    expect(calc.multiply(10,0)).toBe(0);
});

test('division', () => {
    expect(calc.divide(2,5)).toBe(0.4);
    expect(calc.divide(0,5)).toBe(0);
    expect(() => calc.divide(10,0)).toThrow("Division by zero")
});

