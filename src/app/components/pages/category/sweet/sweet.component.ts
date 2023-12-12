import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from '../../detail/detail.component';
@Component({
  selector: 'app-sweet',
  templateUrl: './sweet.component.html',
  styleUrls: ['./sweet.component.css']
})
export class SweetComponent {
  sweetlist:any[]=[]

  constructor(private foodservice: FoodService, private matdialog: MatDialog){

  }
  ngOnInit(){
    this.getallsweets()
  }
  getallsweets(){
    this.foodservice.getallsweets()
      .subscribe((sweets:any)=>{
        this.sweetlist=sweets;
      })
  }
  viewsweets(id:number){
    const dialogRef = this.matdialog.open(DetailComponent,{
      width:"900px",
      data:{
        foodid:id,
      }
    })
    dialogRef.afterClosed().subscribe((dataFromDialog: any) => {
      // Handle the data from the dialog, and trigger a function if needed
      this.getallsweets()
    });
  }
}
