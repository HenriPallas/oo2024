class Arvud {
  arvud:number[]=[];
  libisevad:number[]=[];

  lisaArv(lisa:number){
    this.arvud.push(lisa);
    if(this.arvud.length >= 3){
      this.leiaLibisev();
    }
  }

  leiaLibisev(){
    let i = this.libisevad.length
    this.libisevad.push((this.arvud[i]+this.arvud[i+1]+this.arvud[i+2])/3);
  }

  küsiLibisev(){
    return this.libisevad;
  }
}

let arvud = new Arvud();
arvud.lisaArv(1);
arvud.lisaArv(2);
arvud.lisaArv(3);
arvud.lisaArv(4);
arvud.lisaArv(5);
arvud.lisaArv(6);
console.log(arvud.küsiLibisev());
