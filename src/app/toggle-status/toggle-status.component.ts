import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'npstx-toggle-status',
  templateUrl: './toggle-status.component.html',
  styleUrls: ['./toggle-status.component.scss']
})
export class ToggleStatusComponent implements OnInit {

  @Input() status:boolean=false;

  btnLabel="Logout";

  @Output() btnClicked:EventEmitter<boolean>=new EventEmitter();

  constructor() {
    console.log('constructor of toggle status invoked',this.status)
   }

  ngOnInit(): void {
    console.log('init of toggle status invoked',this.status);
    this.status?this.btnLabel="Logout":this.btnLabel="Login";
  }

  handleClick(){
    this.btnLabel=="Logout"?this.btnClicked.emit(true):this.btnClicked.emit(false);
  }

}
