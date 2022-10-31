import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
import { CalcComponent } from './calc/calc.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ToggleStatusComponent } from './toggle-status/toggle-status.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { RootRoutingModule } from './app-routing.module';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ContactComponent } from './home/contact/contact.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    LogoutComponent,
    CalcComponent,
    AvatarComponent,
    MenuBarComponent,
    ToggleStatusComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    DashboardComponent,
    ProductListComponent,
    ContactComponent,
    ProductDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule,RootRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
