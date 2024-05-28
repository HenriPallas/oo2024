let sisendid:number[] = [1, 2, 3, 4, 5];
let valjundid:number[] = [];

function libisevKeskmine(sisendid:number[]){
  for(let i = 0; i<(sisendid.length-2); i++){
    valjundid.push((sisendid[i]+sisendid[i+1]+sisendid[i+2])/3);
  }
  return valjundid;
}

console.log(libisevKeskmine(sisendid));