import {Calculator} from "../calculator";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});


test('empty init', () => {
    expect(calcobj.getPanelContents()).toBe("0");
 });

test('simple input', ()=>{
    calcobj.pressButton('7');
    expect(calcobj.getPanelContents()).toBe("7");
});

test('simple input', ()=>{
    calcobj.pressButton('8');
    expect(calcobj.getPanelContents()).toBe("8");
});

test('multiple symbols input', ()=>{
    calcobj.pressButton('7');
    calcobj.pressButton('8');
    expect(calcobj.getPanelContents()).toBe("78");
});

test('multiple symbols input', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('2');
    expect(calcobj.getPanelContents()).toBe("32");
});

test('clear panel', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('2');
    calcobj.pressButton('C');
    expect(calcobj.getPanelContents()).toBe("0");
});

test('adding 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
});

test('subtracting 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('-');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("1");
});




test('multiply 2', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});

test('divide 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('/');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("1.5");
});

test('mark and panel adding', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    expect(calcobj.getPanelContents()).toBe("3");
});

test('mark and panel subtracting', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('-');
    expect(calcobj.getPanelContents()).toBe("3");
});

test('second calculation start', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
    calcobj.pressButton('4');
    expect(calcobj.getPanelContents()).toBe("4");
});

test('continous calculation', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
    calcobj.pressButton('+');
    calcobj.pressButton('1');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});


test('floating point', ()=>{
    calcobj.pressButton('5');
    calcobj.pressButton('/');
    calcobj.pressButton('3');
    calcobj.pressButton('=');
    expect(parseFloat(calcobj.getPanelContents())).toBeCloseTo(1.6666666, 6);
});

test('add to additive memory', ()=>{
  calcobj.pressButton('5');
  calcobj.pressButton('+');
  calcobj.pressButton('1');
  calcobj.pressButton('0');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  calcobj.pressButton('MR');
  expect(calcobj.getPanelContents()).toBe("15");
})

test('add to additive memory1', ()=>{
  calcobj.pressButton('5');
  calcobj.pressButton('+');
  calcobj.pressButton('1');
  calcobj.pressButton('0');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  calcobj.pressButton('7');
  calcobj.pressButton('+');
  calcobj.pressButton('5');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  calcobj.pressButton('MR');
  expect(calcobj.getPanelContents()).toBe("27");
})

test('add to additive memory2', ()=>{
  calcobj.pressButton('5');
  calcobj.pressButton('+');
  calcobj.pressButton('1');
  calcobj.pressButton('0');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  calcobj.pressButton('7');
  calcobj.pressButton('+');
  calcobj.pressButton('5');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  expect(calcobj.getPanelContents()).toBe("12");
})

test('add to additive memory3', ()=>{
  calcobj.pressButton('5');
  calcobj.pressButton('+');
  calcobj.pressButton('1');
  calcobj.pressButton('0');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  calcobj.pressButton('7');
  calcobj.pressButton('+');
  calcobj.pressButton('5');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  calcobj.pressButton('3');
  calcobj.pressButton('+');
  calcobj.pressButton('4');
  calcobj.pressButton('=');
  calcobj.pressButton('MR');
  expect(calcobj.getPanelContents()).toBe("27");
})

test('add to additive memory4', ()=>{
  calcobj.pressButton('5');
  calcobj.pressButton('+');
  calcobj.pressButton('1');
  calcobj.pressButton('0');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  calcobj.pressButton('7');
  calcobj.pressButton('+');
  calcobj.pressButton('5');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  calcobj.pressButton('3');
  calcobj.pressButton('+');
  calcobj.pressButton('4');
  calcobj.pressButton('=');
  expect(calcobj.getPanelContents()).toBe("7");
})

test('add to subtractive memory', ()=>{
  calcobj.pressButton('5');
  calcobj.pressButton('+');
  calcobj.pressButton('1');
  calcobj.pressButton('0');
  calcobj.pressButton('=');
  calcobj.pressButton('M-');
  calcobj.pressButton('MR');
  expect(calcobj.getPanelContents()).toBe("-15");
})

test('add to subtractive memory1', ()=>{
  calcobj.pressButton('5');
  calcobj.pressButton('+');
  calcobj.pressButton('1');
  calcobj.pressButton('0');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  calcobj.pressButton('7');
  calcobj.pressButton('+');
  calcobj.pressButton('5');
  calcobj.pressButton('=');
  calcobj.pressButton('M-');
  calcobj.pressButton('MR');
  expect(calcobj.getPanelContents()).toBe("3");
})

test('add to subtractive memory2', ()=>{
  calcobj.pressButton('5');
  calcobj.pressButton('+');
  calcobj.pressButton('1');
  calcobj.pressButton('0');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  calcobj.pressButton('7');
  calcobj.pressButton('+');
  calcobj.pressButton('5');
  calcobj.pressButton('=');
  calcobj.pressButton('M-');
  expect(calcobj.getPanelContents()).toBe("12");
})

test('add to subtractive memory3', ()=>{
  calcobj.pressButton('5');
  calcobj.pressButton('+');
  calcobj.pressButton('1');
  calcobj.pressButton('0');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  calcobj.pressButton('7');
  calcobj.pressButton('+');
  calcobj.pressButton('5');
  calcobj.pressButton('=');
  calcobj.pressButton('M-');
  calcobj.pressButton('3');
  calcobj.pressButton('+');
  calcobj.pressButton('4');
  calcobj.pressButton('=');
  calcobj.pressButton('MR');
  expect(calcobj.getPanelContents()).toBe("3");
})

test('add to subtractive memory4', ()=>{
  calcobj.pressButton('5');
  calcobj.pressButton('+');
  calcobj.pressButton('1');
  calcobj.pressButton('0');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  calcobj.pressButton('7');
  calcobj.pressButton('+');
  calcobj.pressButton('5');
  calcobj.pressButton('=');
  calcobj.pressButton('M-');
  calcobj.pressButton('3');
  calcobj.pressButton('+');
  calcobj.pressButton('4');
  calcobj.pressButton('=');
  expect(calcobj.getPanelContents()).toBe("7");
})

test('add to subtractive memory4', ()=>{
  calcobj.pressButton('5');
  calcobj.pressButton('+');
  calcobj.pressButton('1');
  calcobj.pressButton('0');
  calcobj.pressButton('=');
  calcobj.pressButton('M+');
  calcobj.pressButton('7');
  calcobj.pressButton('+');
  calcobj.pressButton('5');
  calcobj.pressButton('=');
  calcobj.pressButton('M-');
  calcobj.pressButton('3');
  calcobj.pressButton('+');
  calcobj.pressButton('4');
  calcobj.pressButton('=');
  calcobj.pressButton('MC');
  calcobj.pressButton('MR');
  expect(calcobj.getPanelContents()).toBe("0");
})