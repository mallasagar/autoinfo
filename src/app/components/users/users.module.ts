import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserlayoutComponent } from './userlayout/userlayout.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';

const routes: Routes = [
  {path:'',component: UserlayoutComponent ,children:[
    { path: 'user', component:AboutComponent  },
  ]
  }
];


@NgModule({
  declarations: [UserlayoutComponent],
  imports: [CommonModule,RouterModule.forChild(routes)],
  providers:[]

})
export class UsersModule { }
