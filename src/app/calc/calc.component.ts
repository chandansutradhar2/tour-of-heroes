import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'npstx-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  values:number[]=[];
  container:string="0";

  lastAction!:string;
  constructor() {

   }

  add():number{
    let res:number=0;
    this.values.forEach(item=>{
      res=res+item;
    })

    return res;
  }

  subtract(){

  }


  ngOnInit(): void {
  }

  onZeroPress(){
    this.container+=0
  }

  onNumpadPress(number:string){
    this.container+=number;
  }

  onClear(){
    this.values=[];
    this.container="0";
  }

  onAddPress(){
    this.lastAction="add";
    this.values.push(parseFloat(this.container));
    this.container="0";
    console.log(this.values);

  }

  onEqualClicked(){
    this.values.push(parseFloat(this.container));
    
    switch (this.lastAction) {
      case "add":
        this.container=this.add().toString();
       console.log(this.container);
        break;
    
      default:
        break;
    }
  }
}
