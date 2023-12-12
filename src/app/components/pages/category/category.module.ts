import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { CategoryComponent } from './category.component';
import { SnackComponent } from './snack/snack.component';
import { FoodComponent } from './food/food.component';
import { SweetComponent } from './sweet/sweet.component';
import { DrinkComponent } from './drink/drink.component';

const routes: Routes = [
    {path:'', component:CategoryComponent, children:[
        {path:'snacks', component:SnackComponent},
        {path:'foods', component:FoodComponent},
        {path:'sweets', component:SweetComponent},
        {path:'drinks', component:DrinkComponent},
        { path: '',   redirectTo: 'category/snack', pathMatch:  'full' },
    ]},

];


@NgModule({
  declarations:[
    FoodComponent,
    SweetComponent,
    DrinkComponent
  ],
  imports: [CommonModule,RouterModule.forChild(routes),FontAwesomeModule,FormsModule,MatCommonModule,MatMenuModule, MatDialogModule,],
  providers:[],
  exports:[]

})
export class CategoryModule { }