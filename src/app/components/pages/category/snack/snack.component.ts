import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { MatDialog } from '@angular/material/dialog';

import { DetailComponent } from '../../detail/detail.component';
@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent {

  snacklist:any[] = [];
  constructor(private foodservice:FoodService, private matdialog:MatDialog){

  }


  ngOnInit(){
    this.getallsnack()
  }

  getallsnack(){
    this.foodservice.getallsnacks()
         .subscribe((snacks:any)=>{
          this.snacklist=snacks;
        })
  }
  viewsnack(id:number){
    const dialogRef = this.matdialog.open(DetailComponent,{
      width:"900px",
      data:{
        foodid:id,
      }
    })
    dialogRef.afterClosed().subscribe((dataFromDialog: any) => {
      // Handle the data from the dialog, and trigger a function if needed
      this.getallsnack()
    });
  }

}
