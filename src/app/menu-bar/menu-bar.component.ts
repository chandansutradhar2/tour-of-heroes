import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'npstx-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})

export class MenuBarComponent implements OnInit {

  isLoggedIn:boolean=true;

  @Input() userName!:string;

  constructor() { 
    console.log('constructor of menu bar invoked')
  }

  ngOnInit(): void {
    console.log('init of menu bar invoked')
  }

}
