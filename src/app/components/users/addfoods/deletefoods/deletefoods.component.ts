import { Component } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Inject} from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deletefoods',
  templateUrl: './deletefoods.component.html',
  styleUrls: ['./deletefoods.component.css']
})
export class DeletefoodsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private foodservice: FoodService, private toast: ToastrService){

  }

  confirmdeletefood(){
    this.foodservice.deletefood(this.data.userid)
    .subscribe((success)=>{
      if(success){
        this.toast.success("successfully deleted")
      }else{
        this.toast.error("failed to delete")
      }
    })
  }

}
