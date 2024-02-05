// function korrutakahega(arv:number){
//  return arv*2;
// }

// console.log(korrutakahega(7));

// Koostage kehamassiindeksi leidmise funktsioon
// KMI = kaal (kg) / pikkus (m)²

let kaalKg = 75
let pikkusCm = 174
function KMI(kaal:number, pikkus:number){
  return kaal/((pikkus/100)*(pikkus/100))
}

function KMIHinnang(indeks:number):string{
  if(indeks<16){return "Tervisele ohtlik alakaal";}
  if(indeks<18.5){return "Alakaal";}
  if(indeks<25){return "Normaalkaal";}
  if(indeks<30){return "Ülekaal";}
  if(indeks<35){return "Rasvumine";}
  if(indeks<40){return "Tugev rasvumine";}
  return "Tervisele ohtlik rasvumine";
}

console.log(KMI(kaalKg, pikkusCm).toFixed(1))
console.log(KMIHinnang((KMI(kaalKg, pikkusCm))))

let KMItulemused:number[]=[25, 18, 38, 28];
let hinnangud = KMItulemused.map(KMIHinnang);
console.log(hinnangud);