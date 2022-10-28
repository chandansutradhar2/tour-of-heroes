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
  name:string="Angular App";
  userName:string="Ashmit Patel";

  onClick(){
    alert(this.userName);

    //on ketporess event
    //let val=document.getElementById("txt1").value;
    //this.userName=value;

  }

  onEnter(ev:any){
    console.log(ev.key);
    ev.key=="Enter"?this.onClick():null;

  }

  onParaClick(ev:any){
    console.log(ev);
    ev.target.localName=='button'?null: alert('para cliked');
  }
}

