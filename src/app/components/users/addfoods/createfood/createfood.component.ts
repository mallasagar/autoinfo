import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FoodModel } from 'src/app/models/foods.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-createfood',
  templateUrl: './createfood.component.html',
  styleUrls: ['./createfood.component.css']
})
export class CreatefoodComponent {

  food:FoodModel= new FoodModel('','',0,0,'','','',0,0,'','','')

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                private foodservice: FoodService,
                private toast: ToastrService){}

  ngOnInit(){
    
  }

  createfood(){
    this.food.userid=this.data.userid
    this.food.quantity=this.data.quantity
    this.food.foodmakeraddress=this.data.address
    this.food.foodmakerstatus=this.data.status
    this.food.foodmakerbrand=this.data.brand
    this.food.foodmakercontact=this.data.usercontact
   
     this.foodservice.createfood(this.food)
     .subscribe((success)=>{
      this.toast.info("successfully created")
      console.log(success)
     })
    
  }


  resetfoodform(){
    this.food = new FoodModel('','',0,0,'','','',0,0,'','','')

  }

}
