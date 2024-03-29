import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { SidenavComponent } from './adminlayout/sidenav/sidenav.component';
import { HeaderComponent } from './adminlayout/header/header.component';
import { FooterComponent } from './adminlayout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsersComponent } from './users/users.component';
import { DeleteComponent } from './delete/delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AdmincustomerComponent } from './admincustomer/admincustomer.component';



const routes: Routes = [
  {path:'',  component:AdminlayoutComponent,  children:[
    { path: 'customerlist', component: AdmincustomerComponent },
    { path: 'userslist', component:UsersComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'editproduct', component: EditproductComponent },
    { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },

  ]} 
];

  @NgModule({
    declarations: [ AddproductComponent, EditproductComponent,DashboardComponent,
       AdminlayoutComponent, SidenavComponent, HeaderComponent, FooterComponent, 
       UsersComponent, DeleteComponent,AdmincustomerComponent],
    imports: [CommonModule,RouterModule.forChild(routes),FontAwesomeModule, MatDialogModule,MatInputModule],
    providers:[]
})
export class AdminModule { }
