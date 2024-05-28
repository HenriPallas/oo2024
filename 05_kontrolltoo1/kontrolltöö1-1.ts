class Auto{
  kiirus: number;
  distants: number;

  constructor(kiirus: number, distants: number){
    this.kiirus = kiirus;
    this.distants = distants;
  }

  näitaAndmeid(){
    console.log("--------------------");
    console.log("Kiirus:", this.kiirus, "km/h.");
    console.log("Distants", this.distants, "m.");
    console.log("--------------------");
  }
}

let auto1 = new Auto(50, 100);
let auto2 = new Auto(70, 50);
auto1.näitaAndmeid();
console.log();
auto2.näitaAndmeid();