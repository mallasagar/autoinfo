import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodService } from 'src/app/services/food.service';
import { DetailComponent } from '../../detail/detail.component';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

  foodlist:any[] =[]

  constructor(private foodservice:FoodService, private matdialog:MatDialog){

  }



  ngOnInit(){
this.getallfood()
  }
  getallfood(){
    this.foodservice.getallfoods()
    .subscribe((foodlist)=>{
      this.foodlist=foodlist
    })
  }

  viewfood(id:number){
    const dialogRef = this.matdialog.open(DetailComponent,{
      width:"900px",
      data:{
        foodid:id,
      }
    })
    dialogRef.afterClosed().subscribe((dataFromDialog: any) => {
      // Handle the data from the dialog, and trigger a function if needed
      this.getallfood()
    });
  }
}
