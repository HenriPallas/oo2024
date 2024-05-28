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
    if(this.content.name != "empty"){
      return (this.content.gpl * this.capacity + this.mass); 
    } else {
      return "Bottle is empty!";
    }
  }

  getTotalCost(){
    if(this.content.name != "empty"){
      return (this.content.cpl * this.capacity + this.tare_price); 
    } else {
      return this.tare_price;
    }
  }
}

/*let d1:Drink=new Drink("water",0.5,1000);
let b1:Bottle=new Bottle(2, "Plastic", 50, 0.1);
console.log(d1);
console.log(b1);
b1.addDrink(d1);
console.log(b1);
console.log(b1.getTotalMass());
console.log(b1.getTotalCost());*/

export{
    Bottle, Drink
}