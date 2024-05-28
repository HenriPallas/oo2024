class Drink {
  name:string;
  cpl:number; //cpl = Cost per liter (eur)
  gpl:number; //gpl = Gram per liter

  constructor(name:string, cpl:number, gpl:number){
    this.name = name;
    this.cpl = cpl;
    this.gpl = gpl;
  }
}

let defaultDrink:Drink = new Drink("Empty", 0, 0);

class Bottle {
  capacity:number; // Liters
  type:string;
  mass:number;
  tare_price:number;

  constructor(capacity:number, type:string, mass:number, tare_price:number){
    this.capacity = capacity;
    this.type = type;
    this.mass = mass;
    this.tare_price = tare_price;
  }
}


class Drum {
  volume:number;
  contents:Drink = defaultDrink;
  contents_amount:number = 0;

  constructor(volume:number){
    this.volume = volume;
  }

  setContentAmount(v:number){
    this.contents_amount = v;
  }

  setDrink(d:Drink){
    this.contents = d;
  }

  getContentAmount(){
    return this.contents_amount;
  }

  fillBottles(b:Bottle,a:number){
    let filledBottles = 0;
    let emptyBottles = a;
    while(this.volume >= b.capacity && emptyBottles > 0){
      filledBottles += 1;
      emptyBottles -= 1;
      this.volume -= b.capacity;
    }
    return filledBottles;
  }
}

let d1 = new Drink("water", 0.5, 1000);
let b1 = new Bottle(1, "Plastic", 50, 0.1);
let drum1 = new Drum(1000);
console.log("Filled: " + drum1.fillBottles(b1,2000));