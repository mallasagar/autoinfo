import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { favFoodModel } from 'src/app/models/favfood.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-favorder',
  templateUrl: './favorder.component.html',
  styleUrls: ['./favorder.component.css']
})
export class FavorderComponent {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, 
                private foodservice: FoodService,
                private toast:ToastrService){
  }

  favfood:favFoodModel= new favFoodModel(1,1,1)

  ngOnInit(){
  }

  favorderquantity(){
      this.favfood.userid=this.data.customerid
      this.favfood.favorder
     this.favfood.foodid=this.data.foodid
      this.foodservice.markfood(this.favfood)
            .subscribe((success)=>{
              if(success){
                this.toast.success("successfully added to favorites")
              }else{
                this.toast.error("failed to add to favorites")
              }
          })
  }
}
