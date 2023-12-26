import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserlayoutComponent } from './userlayout/userlayout.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UsersidenavComponent } from './usersidenav/usersidenav.component';
import { AddfoodsComponent } from './addfoods/addfoods.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CreatefoodComponent } from './addfoods/createfood/createfood.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DeletefoodsComponent } from './addfoods/deletefoods/deletefoods.component';
import { UpdatefoodsComponent } from './addfoods/updatefoods/updatefoods.component';
import { UserordersComponent } from './userorders/userorders.component';

const routes: Routes = [
  {path:'',component: UserlayoutComponent ,children:[
    { path: 'user', component:AboutComponent  },
    {path:'dashboard', component:UserdashboardComponent},
    { path: 'addfoods', component:AddfoodsComponent  },
    { path: 'order', component:UserordersComponent  },
    { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
  ]
  }
];


@NgModule({
  declarations: [UserlayoutComponent, UserheaderComponent, UsersidenavComponent, AddfoodsComponent, UserdashboardComponent, CreatefoodComponent, DeletefoodsComponent, UpdatefoodsComponent, UserordersComponent],
  imports: [CommonModule,RouterModule.forChild(routes), MatDialogModule, MatInputModule, FormsModule, ],
  providers:[]

})
export class UsersModule { }
