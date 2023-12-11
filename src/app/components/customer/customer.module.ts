import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlayoutComponent } from './customerlayout/customerlayout.component';
import { CustomerComponent } from './customer.component';
import { HomeComponent } from '../pages/home/home.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { AboutComponent } from '../pages/about/about.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { SigninComponent } from './customerlayout/signin/signin.component';
import { SignupComponent } from './customerlayout/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from '../pages/detail/detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';
const routes: Routes = [
  {path:'',component:CustomerlayoutComponent  ,children:[
    { path: 'home', component:HomeComponent  },
    // {path:'contact', component:ContactComponent},
    // {path:'about', component:AboutComponent},
    {path:'signup', component:SignupComponent},
    {path:'signin', component:SigninComponent},
    { path: '',   redirectTo: '/home', pathMatch:  'full' },
  ]
  }
];


@NgModule({
  declarations: [CustomerlayoutComponent, NavbarComponent, HomeComponent, AboutComponent, ContactComponent, SigninComponent,SignupComponent, DetailComponent],
  imports: [CommonModule,RouterModule.forChild(routes),FontAwesomeModule,FormsModule,MatCommonModule, MatDialogModule],
  providers:[],
  exports:[]

})
export class CustomerModule { }