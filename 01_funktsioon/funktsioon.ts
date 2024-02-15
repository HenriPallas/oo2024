// Geomeetriline jada

let alg_väärtus = 10;
let tegur = 2;
let liikmed = 5;

function jadaNLiige(a1:number,q:number,n:number){
  let lõpp_liige:number = 0;
  let aste = (n-1);
  let muutus = q ** aste;
  return lõpp_liige = a1*muutus;
}

function jadaSumma(a1:number,q:number,n:number){
  let lõpp_summa:number = 0;
  let osa1 = q ** n - 1;
  let osa2 = a1 * osa1;
  let osa3 = q - 1;
  return lõpp_summa = osa2 / osa3;
}

console.log(jadaNLiige(alg_väärtus,tegur,liikmed));
console.log(jadaSumma(alg_väärtus,tegur,liikmed));