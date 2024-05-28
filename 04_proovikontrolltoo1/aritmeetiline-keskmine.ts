let sisendid:number[] = [15, 7, 10];
console.log(sisendid.length);

function aritKeskmine(sisendid:number[]){
  let liitmine:number = 0;
  for(let i of sisendid){
    liitmine = liitmine + i;
  }
  let arit_keskmine:number = liitmine/sisendid.length;
  return arit_keskmine;
}

console.log(aritKeskmine(sisendid));