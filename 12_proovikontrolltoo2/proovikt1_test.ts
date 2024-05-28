import {Drink} from "../proovikt";
import {Bottle} from "../proovikt";

let drink:Drink=null;
let bottle:Bottle=null;

test('', () => {
  drink = new Drink("water",0.5,1000);
  bottle = new Bottle(2, "Plastic", 50, 0.1)
  bottle.addDrink(drink);
  expect(bottle.getTotalCost()).toBe(1.1);
  expect(bottle.getTotalMass()).toBe(2050);
});

test('', () => {
  drink = new Drink("water",0.5,1000);
  bottle = new Bottle(1, "Glass", 150, 0.25)
  bottle.addDrink(drink);
  expect(bottle.getTotalCost()).toBe(0.75);
  expect(bottle.getTotalMass()).toBe(1150);
});

test('', () => {
  drink = new Drink("Mystery",0.5,2000);
  bottle = new Bottle(5, "Plastic", 50, 0.1)
  bottle.addDrink(drink);
  expect(bottle.getTotalCost()).toBe(2.6);
  expect(bottle.getTotalMass()).toBe(10050);
});