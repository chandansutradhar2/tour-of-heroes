import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'npstx-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  counter:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  handleMe(ev:number){
this.counter=ev;
  }
}
