import { Component } from '@angular/core';
import{Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodService } from 'src/app/services/food.service';
import { FoodModel } from 'src/app/models/foods.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatefoods',
  templateUrl: './updatefoods.component.html',
  styleUrls: ['./updatefoods.component.css']
})
export class UpdatefoodsComponent {

constructor(@Inject(MAT_DIALOG_DATA) public data: any,private foodservice:FoodService, private toast:ToastrService){}
newfood:any;

food:FoodModel= new FoodModel('','',0,0,'','','',0,0,'','','')

  ngOnInit(){
    this.getfoodbyid()
  }

  updatefood(){
    this.getfoodbyid()
    this.foodservice.updatefoodbyid(this.data.foodid,this.food)
    .subscribe((success)=>{
      if(success){
        console.log(success)
        // this.toast.success("food updated successfully")
      }
      else{
        this.toast.error("error while updating")
      }
    })
    
  }



  getfoodbyid(){
    this.foodservice.getfoodbyid(this.data.foodid)
    .subscribe((food)=>{
      if(food){
        // console.log(food)
        this.newfood=food;
        this.food.userid=this.newfood.userid
        this.food.quantity=this.newfood.quantity
        this.food.foodmakeraddress=this.newfood.foodmakeraddress
        this.food.foodmakerstatus=this.newfood.foodmakerstatus
        this.food.foodmakerbrand=this.newfood.foodmakerbrand
        this.food.foodmakercontact=this.newfood.foodmakercontact
        this.food.foodimageurl=this.newfood.foodimageurl
        this.food.foodname=this.newfood.foodname
        this.food.foodcategory=this.newfood.foodcategory
        this.food.foodcuisine=this.newfood.foodcuisine
        this.food.fooddescription=this.newfood.fooddescription
        this.food.foodprice=this.newfood.foodprice  
      }
    })
  }


  resetupdateform(){
    this.food= new FoodModel('','',0,0,'','','',0,0,'','','')
  }

}
