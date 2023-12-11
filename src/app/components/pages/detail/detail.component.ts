import { Component } from '@angular/core';
import{Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  fooddetail:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private foodservice:FoodService){

  }


  ngOnInit(){
this.viewdetail()
  }

  viewdetail(){
      this.foodservice.getfoodbyid(this.data.foodid)
        .subscribe((food:any)=>{
          if(food){
            this.fooddetail=food
            console.log(this.fooddetail)
          }else{
            console.log("No food found")
          }
        })
  }

}
