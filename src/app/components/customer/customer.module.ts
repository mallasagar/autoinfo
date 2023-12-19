import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlayoutComponent } from './customerlayout/customerlayout.component';
import { HomeComponent } from '../pages/home/home.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { AboutComponent } from '../pages/about/about.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { SigninComponent } from './customerlayout/signin/signin.component';
import { SignupComponent } from './customerlayout/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from '../pages/detail/detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { FavComponent } from './fav/fav.component';
import { DeletecartComponent } from './fav/deletecart/deletecart.component';
import { customerguardGuard } from 'src/app/guard/customerguard.guard';

import { OrderComponent } from './order/order.component';
import { SingleorderComponent } from './order/singleorder/singleorder.component';

const routes: Routes = [
  {path:'',component:CustomerlayoutComponent  ,children:[
    { path: 'home', component:HomeComponent  },
    {path:'signup', component:SignupComponent},
    {path:'signin', component:SigninComponent},
    {path:'customer/favourite',canActivate:[customerguardGuard], component:FavComponent},
    {path:'customer/orders',canActivate:[customerguardGuard], component:OrderComponent},
    { path: '',   redirectTo: '/home', pathMatch:  'full' },
  ]
  }
];


@NgModule({
  declarations: [CustomerlayoutComponent, NavbarComponent, HomeComponent, AboutComponent, ContactComponent, SigninComponent,SignupComponent, DetailComponent, CustomerprofileComponent, FavComponent, DeletecartComponent, OrderComponent, SingleorderComponent],
  imports: [HttpClientModule,CommonModule,RouterModule.forChild(routes),FontAwesomeModule,FormsModule,MatCommonModule,MatMenuModule, MatDialogModule],
  providers:[],
  exports:[]
})
export class CustomerModule { }