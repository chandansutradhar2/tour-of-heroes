import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'npstx-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() msg!:string;
  @Output() onCNClick:EventEmitter<number>=new EventEmitter();

  cnt:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.cnt++;
    this.onCNClick.emit(this.cnt);

  }
}
