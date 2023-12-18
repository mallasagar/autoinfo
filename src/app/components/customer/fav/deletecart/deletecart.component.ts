import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deletecart',
  templateUrl: './deletecart.component.html',
  styleUrls: ['./deletecart.component.css']
})
export class DeletecartComponent {
  constructor(private foodservice:FoodService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private toast: ToastrService){

  }

  ngOnInit(){
  }

  confirmdeletecart(){
    this.foodservice.deletefoodcart(this.data.cartid)
     .subscribe((success)=>{
       if(success){
         this.toast.success("Cart deleted successfully")
         }else{
          this.toast.error("Cart invalid")
         }
     },  (error) => {
      console.error('Error while Deleting:', error);
      // Handle the error, show a message to the user, or perform other actions as needed.
    })
    }
}
