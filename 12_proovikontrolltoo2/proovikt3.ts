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
  content:Drink=defaultDrink;

  constructor(capacity:number, type:string, mass:number, tare_price:number){
    this.capacity = capacity;
    this.type = type;
    this.mass = mass;
    this.tare_price = tare_price;
  }

  addDrink(d:Drink){
    this.content = d;
  }

  getTotalMass(){
    return (this.content.gpl * this.capacity + this.mass); 
  }

  getTotalCost(){
    return (this.content.cpl * this.capacity + this.tare_price); 
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

  getContentAmount(){
    return this.contents_amount;
  }

  setDrink(d:Drink){
    this.contents = d;
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

class Box extends Bottle {
  cost:number;
  bottles:Bottle[]=[];

  constructor(capacity:number, type:string, mass:number, cost:number){
    super(capacity, type, mass, 0);
    this.cost = cost;
  }

  addBottles(b:Bottle,a:number){
    while(this.bottles.length < this.capacity && a > 0){
      a -= 1
      this.bottles.push(b);
    }
  }

  getBoxMass(){
    let boxMass = this.mass;
    let currentBottle:any = '';
    for(let i = 0; i < this.bottles.length; i++){
      currentBottle = this.bottles[i];
      boxMass += currentBottle.getTotalMass();
    }
    return boxMass
  }
}

let d1 = new Drink("water", 0.5, 1000);
let b1 = new Bottle(1, "Plastic", 50, 0.1);
let box1 = new Box(25, "Wood", 500 ,5);
b1.addDrink(d1);
box1.addBottles(b1, 30);
console.log(box1.getBoxMass());