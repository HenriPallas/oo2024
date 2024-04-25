class Product {
  weight:number;
  amount:number;
  name:string;
  type:number=0;

  constructor(weight:number, amount:number, name:string){
    this.weight = weight;
    this.amount = amount;
    this.name = name;
  }

  getWeight(): number {
    return (this.weight * this.amount);
  }
}

class Box extends Product {
  contents: (Product | Box)[];

  constructor(weight: number, name: string) {
    super(weight, 1, name);
    this.type = 1;
    this.contents = [];
  }

  add(item: Product | Box) {
    this.contents.push(item);
  }
  
 getTotalWeight(): number {
    let totalWeight = this.weight;
    for (let i = 0; i < this.contents.length; i++) {
      let item = this.contents[i];
      if (item.type === 0){
        totalWeight += item.getWeight();
      }
    }
    return totalWeight;
  }

  displayContents(){
    console.log(this.name + ":");
    console.log("Weight:" + this.getTotalWeight());
  }

}

let p1:Product = new Product(10, 5, "Product1");
let p2:Product = new Product(20, 2, "Product2");
let b1:Box = new Box(5, "Box1");
let b2:Box = new Box(10, "Box2");
b1.add(p1);
console.log(b1.displayContents());
console.log(b2.displayContents());
b2.add(p2);
console.log(b1.displayContents());
console.log(b2.displayContents());
b2.add(b1);
console.log(b1.displayContents());
console.log(b2.displayContents());
