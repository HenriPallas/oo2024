class Hulknurk{
  ümbermõõt:number;
  x_kord:number[]=[];
  y_kord:number[]=[];
  küljed:number[]=[];

  constructor(x_kord: number[], y_kord: number[]){
  this.x_kord = x_kord;
  this.y_kord = y_kord;
  this.ümbermõõt = 0;
  }

  trükiKordinaadid(): void{
    console.log('X-koordinaadid:', this.x_kord);
    console.log('Y-koordinaadid:', this.y_kord);
  }

  lisaPunkt(x:number, y:number){
    this.x_kord.push(x);
    this.y_kord.push(y);
  }

  leiaKüljed(){
    this.küljed = [];
    let külg_x = 0;
    let külg_y = 0;
    let külg_pikkus = 0;

    for(let i = 0; i < this.x_kord.length-1; i++){
      külg_x = (this.x_kord[i+1]-this.x_kord[i])**2
      külg_y = (this.y_kord[i+1]-this.y_kord[i])**2
      külg_pikkus = Math.sqrt(külg_x + külg_y);
      this.küljed.push(külg_pikkus);
    }

    külg_x = (this.x_kord[0]-this.x_kord[this.x_kord.length-1])**2
    külg_y = (this.y_kord[0]-this.y_kord[this.y_kord.length-1])**2
    külg_pikkus = Math.sqrt(külg_x + külg_y);
    this.küljed.push(külg_pikkus);
  }

  leiaÜmbermõõt(){
    this.ümbermõõt = 0;
    for(let i = 0; i < this.küljed.length; i++){
      this.ümbermõõt = this.ümbermõõt + this.küljed[i];
    }
  }

  nihuta(x:number, y:number){
    for(let i = 0; i < this.x_kord.length; i++){
      this.x_kord[i] = this.x_kord[i] + x;
    }
    for(let i = 0; i < this.y_kord.length; i++){
      this.y_kord[i] = this.y_kord[i] + y;
    }
  }

  muudaSuurus(kordaja:number){
    for(let i = 0; i < this.x_kord.length; i++){
      this.x_kord[i] = this.x_kord[i] * kordaja;
    }
    for(let i = 0; i < this.y_kord.length; i++){
      this.y_kord[i] = this.y_kord[i] * kordaja;
    }
  }

  trükiKüljed(){
    this.leiaKüljed();
    console.log("Küljed:", this.küljed);
  }

  trükiÜmbermõõt(){
    this.leiaÜmbermõõt();
    console.log("Ümbermõõt:", this.ümbermõõt);
  }

  trükiAndmed(){
    this.trükiKordinaadid();
    this.trükiKüljed();
    this.trükiÜmbermõõt();
  }
}

let kolmnurk1 = new Hulknurk([1, 2, 3], [4, 5, 6]);
let kolmnurk2 = new Hulknurk([7, 8, 9], [10, 11, 12]);

console.log("---Esimene kolmnurk---");
kolmnurk1.lisaPunkt(13, 14);
kolmnurk1.trükiAndmed();
console.log();
console.log("---Nihuta X ja Y kordinaate 1 võrra---")
kolmnurk1.nihuta(1, 1);
kolmnurk1.trükiAndmed();
console.log();
console.log("---Suurus 200%---")
kolmnurk1.muudaSuurus(2);
kolmnurk1.trükiAndmed();

console.log();

console.log("---Teine kolmnurk---");
kolmnurk2.trükiAndmed();