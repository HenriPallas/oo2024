class Calculator{

    protected panelContents:string="";
    protected memoryContents:number=0;
    protected markContents:string="";
    protected markPressed:boolean=false;
    protected marks:string[]=["+", "-", "X", "/"];
    protected additiveMemory:string="0";

    pressButton(b:string):void{
        if(b=="C"){this.panelContents=""}

        else if(this.marks.includes(b)){
            this.memoryContents=parseFloat(this.panelContents);
            this.markContents=b;
            this.markPressed=true;
        } 
        
        else if(b=="="){
            this.markPressed=true;
            if(this.markContents.length==1){
                if(this.markContents=="+"){
                    this.panelContents=(this.memoryContents+parseFloat(this.panelContents)).toString();
                }
                if(this.markContents=="-"){
                    this.panelContents=(this.memoryContents-parseFloat(this.panelContents)).toString();
                }
                if(this.markContents=="X"){
                    this.panelContents=(this.memoryContents*parseFloat(this.panelContents)).toString();
                }
                if(this.markContents=="/"){
                    this.panelContents=(this.memoryContents/parseFloat(this.panelContents)).toString();
                }
            }
        }

        else if(b=="M+"){
          this.additiveMemory=(parseFloat(this.additiveMemory)+parseFloat(this.panelContents)).toString();
        }

        else if(b=="M-"){
          this.additiveMemory=(parseFloat(this.additiveMemory)-parseFloat(this.panelContents)).toString();
        }

        else if(b=="MR"){
          this.panelContents = this.additiveMemory;
        }

        else if(b=="MC"){
          this.additiveMemory = "0";
        }

        else{
            if(this.markPressed){
                this.panelContents="";
                this.markPressed=false;
            }
            this.panelContents+=b;
        }
    }

    getPanelContents():string{
        if(this.panelContents.length>0){
            return this.panelContents;
        }
        return "0";
    }
    
}

export{
    Calculator
}