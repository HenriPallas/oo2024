class Hulknurk{
  x_kord:number[]=[];
  y_kord:number[]=[];

  constructor(x_kord: number[], y_kord: number[]){
  this.x_kord = x_kord;
  this.y_kord = y_kord;
  }

  trükiAndmed(): void{
    console.log('X-koordinaadid:', this.x_kord);
    console.log('Y-koordinaadid:', this.y_kord);
  }
}

let kolmnurk1 = new Hulknurk([1, 2, 3], [4, 5, 6]);
let kolmnurk2 = new Hulknurk([7, 8, 9], [10, 11, 12]);

console.log("Esimene kolmnurk:");
kolmnurk1.trükiAndmed();

console.log("Teine kolmnurk:");
kolmnurk2.trükiAndmed();