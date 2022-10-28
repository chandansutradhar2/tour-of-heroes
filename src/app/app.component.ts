import { Component } from '@angular/core';
import { startWith } from 'rxjs';
import { Product } from './models/product.model';
import { User } from './models/user.model';
export interface Car{
  carName:string;
  seatingCapacity:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
car:Car={
  carName:'Tiago',
  seatingCapacity:4
}

firstName:string="Chandan";
search:string="Search Here";
click(){
  console.log(this.search);
}

// products:Product[]=[
//   {
//     name:'samsung x',
//     price:76000,
//     qty:10,
//     img:'http://fakepath/img'
//   },
//   {
//     name:'oppo 51',
//     price:36000,
//     qty:76,
//     img:'http://fakepath/img'
//   },
//   {
//     name:'apple 15',
//     price:78000,
//     qty:5,
//     img:'http://fakepath/img'
//   }
// ]

constructor(){

}

}
