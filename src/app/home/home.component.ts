import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'npstx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userName: string = 'chandan';
  show: boolean = true;
  customer = {
    name: 'chandan',
    mobileNo: '8080811145',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onProductClicked() {
    this.router.navigate(['productlist']);
  }

  changeName(ev: any) {
    this.userName = ev.value;
  }

  showHide() {
    this.show ? (this.show = false) : (this.show = true);
    console.log(this.show);
   // this.show ? (this.btnLabel = 'HIDE') : (this.btnLabel = 'SHOW');
  }
}
