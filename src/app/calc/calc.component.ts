import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'npstx-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  container:string="0";

  constructor() { }

  ngOnInit(): void {
  }

  onZeroPress(){
    this.container+=0
  }

  onOnePress(){
    this.container+=1;
  }

  onClear(){
    this.container="0";
    
  }
}
