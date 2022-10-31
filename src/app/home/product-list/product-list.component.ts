import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'npstx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [
    { id: 'p001', name: 'Samsung Galaxy X', rate: 56999, qty: 10 },
    { id: 'p002', name: 'IPhone Pro', rate: 156999, qty: 130 },
    { id: 'p003', name: 'Oppo X', rate: 23999, qty: 76 },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(productId: string) {
    this.router.navigate([`product/${productId}`]);
  }
}
