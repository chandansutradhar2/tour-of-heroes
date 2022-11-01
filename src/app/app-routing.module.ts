import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ContactComponent } from './home/contact/contact.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { RegisterComponent } from './register/register.component';

const r: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'contactus', component: ContactComponent },
      { path: 'productlist', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'parent', component: ParentComponent },
      { path: 'child/:name', component: ChildComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(r, {
    enableTracing:true,
    
  })],
  exports: [RouterModule],

})
export class RootRoutingModule {}
