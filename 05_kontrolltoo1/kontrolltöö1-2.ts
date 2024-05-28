class Auto{
  kiirus: number;
  distants: number;

  constructor(kiirus: number, distants: number){
    this.kiirus = kiirus;
    this.distants = distants;
  }

  näitaAndmeid(){
    console.log("Kiirus:", this.kiirus, "km/h.");
    console.log("Distants", this.distants, "m.");
  }

  autoLiigub(aeg: number, ajaühik: string){
    let aeg_sekund = 0;
    let kiirus_meeter = (this.kiirus*1000)/3600;
    let distants_muutus = 0;
    let ühikut = "";
    let kogu_distants = 0;

    if(ajaühik === "sekund" || ajaühik === "sek" || ajaühik === "sec" || ajaühik === "s" || ajaühik === "second"){
      aeg_sekund = aeg;
      ühikut = "sekundit";
    }
    if(ajaühik === "minut" || ajaühik === "min" || ajaühik === "minute"){
      aeg_sekund = aeg*60;
      ühikut = "minutit";
    }
    if(ajaühik === "tund" || ajaühik === "h" ||  ajaühik === "t" || ajaühik === "hour"){
      aeg_sekund = aeg*3600;
      ühikut = "tundi";
    }
    distants_muutus = kiirus_meeter * aeg_sekund;
    kogu_distants = this.distants + distants_muutus;

    console.log();
    console.log("Auto sõitis", aeg, ühikut + ".");
    console.log("Auto läbis", distants_muutus, "meetrit.");
    console.log("Kogu distants:", kogu_distants, "meetrit.");
  }
}

// Loo autod
let auto1 = new Auto(50, 100);
let auto2 = new Auto(70, 50);

// Auto 1 andmed
console.log("--------------------");
auto1.näitaAndmeid();
auto1.autoLiigub(3, "sekund");
auto1.autoLiigub(5, "minut");
auto1.autoLiigub(2, "tund");
console.log("--------------------");
console.log();

// Auto 2 andmed
console.log("--------------------");
auto2.näitaAndmeid();
auto2.autoLiigub(3, "sek");
auto2.autoLiigub(5, "min");
auto2.autoLiigub(2, "h");
console.log("--------------------");