import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'npstx-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
 productId!:string;

  constructor(private a: ActivatedRoute) {
    a.params.subscribe((r:any) => {
      console.log(r);
      this.productId=r.id;
    });
  }

  ngOnInit(): void {}
}
