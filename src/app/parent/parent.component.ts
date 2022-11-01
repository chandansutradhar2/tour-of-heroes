import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'npstx-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  counter: number = 0;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(data: number) {
    this.router.navigate([`child/${data}`]);
  }

  handleMe(ev: number) {
    this.counter = ev;
  }
}
