import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from '../../detail/detail.component';
@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent {


  drinklist:any[] = [];
  constructor( private foodservice:FoodService,private matdialog:MatDialog  ){

  }

  ngOnInit(){
this.getalldrink()
  }

  getalldrink(){
    this.foodservice.getalldrinks()
    .subscribe((drink)=>{
      this.drinklist=drink
    })
  }


  viewdrink(id:number){
    const dialogRef = this.matdialog.open(DetailComponent,{
      width:"900px",
      data:{
        foodid:id,
      }
    })
    dialogRef.afterClosed().subscribe((dataFromDialog: any) => {
      // Handle the data from the dialog, and trigger a function if needed
      this.getalldrink()
    });
  }

}
