class Auto{
  kiirus: number;
  distants: number;
  maantee: any;

  constructor(kiirus: number, distants: number){
    this.kiirus = kiirus;
    this.distants = distants;
    this.maantee = 0;
  }

  näitaAndmeid(){
    console.log("Kiirus:", this.kiirus, "km/h.");
    console.log("Distants", this.distants, "m.");
  }

  lisaMaantee(maantee: Maantee){
    this.maantee = maantee;
  }

  autoLiigub(aeg: number, ajaühik: string){
    let aeg_sekund = 0;
    let kiirus_meeter = (this.kiirus*1000)/3600;
    let distants_muutus = 0;
    let ühikut = "";
    let kogu_distants = 0;

    let lõpp_muutus = 0;
    let muutus_vahemaa = 0;
    let lõigu_aeg = 0;
    let muutused = [];

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

    for(let i = 0; i < this.maantee.piirang_algus.length; i++){
        muutused.push(this.maantee.piirang_algus[i]);
        muutused.push(this.maantee.piirang_lõpp[i]);
    }

    console.log(muutused);
    
    /*
          algus_muutus = muutused[i];
      lõpp_muutus = muutused[i+1];
      if(hetke_distants <= algus_muutus){
        lõigu_aeg = algus_muutus / kiirus_meeter;
      }
      i++;
    */

    let j = 0;
    let muutuv_kiirus = kiirus_meeter;
    let hetke_distants = 0;
    let muutus_punkt = 0;
    let muutus_kontroll = 0;

    while(aeg_sekund > 0){
      muutus_punkt = muutused[j];
      muutus_kontroll = distants_muutus + muutuv_kiirus;
      if(muutus_kontroll > muutus_punkt){
        aeg_sekund -= ((muutus_punkt - distants_muutus)/muutuv_kiirus)
        distants_muutus = muutus_punkt;
      } else {
        aeg_sekund -= 1;
        distants_muutus += muutuv_kiirus;
      }
    }

    console.log();
    console.log("Auto sõitis", aeg, ühikut + ".");
    console.log("Auto läbis", distants_muutus, "meetrit.");
  }
}

class Maantee{
  piirang_algus: number[] = [];
  piirang_lõpp: number[] = [];
  piirang_kiirus: number[] = [];
  autod: Auto[] = [];

  constructor(piirang_kiirus: number[], piirang_algus: number[], piirang_lõpp: number[]){
    this.piirang_kiirus = piirang_kiirus;
    this.piirang_algus = piirang_algus;
    this.piirang_lõpp = piirang_lõpp;
    this.autod = [];
  }

  lisaAuto(auto: Auto){
    this.autod.push(auto);
  }
}

// Loo autod
let auto1 = new Auto(50, 100);
let auto2 = new Auto(70, 50);

// Loo maantee
let kiiruse_piirang = [30, 60];
let piirangu_algus = [100, 500];
let piirangu_lõpp = [250, 1000];

let maantee = new Maantee(kiiruse_piirang, piirangu_algus, piirangu_lõpp)

// Aseta autod
auto1.lisaMaantee(maantee);
auto2.lisaMaantee(maantee);
maantee.lisaAuto(auto1);
maantee.lisaAuto(auto2);
console.log(maantee);
console.log(auto1);
console.log(auto2);

// Auto 1 andmed
console.log("--------------------");
auto1.näitaAndmeid();
auto1.autoLiigub(2, "h");
console.log("--------------------");
console.log();

// Auto 2 andmed
console.log("--------------------");
auto2.näitaAndmeid();
console.log("--------------------");