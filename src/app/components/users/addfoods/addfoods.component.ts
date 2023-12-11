import { Component } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { CreatefoodComponent } from './createfood/createfood.component';
import { FoodService } from 'src/app/services/food.service';
import { ToastrService } from 'ngx-toastr';
import { DeletefoodsComponent } from './deletefoods/deletefoods.component';
import { UpdatefoodsComponent } from './updatefoods/updatefoods.component';

@Component({
  selector: 'app-addfoods',
  templateUrl: './addfoods.component.html',
  styleUrls: ['./addfoods.component.css']
})
export class AddfoodsComponent {
  userid:any;
  quantity:number=1;
  status:string='';
  address:string=''
  userbrand:string='';
  usercontact:number=0;
  allfoodlist: any[] = [];

  constructor(private matdialog:MatDialog,
    private toast: ToastrService, 
    private authservice:AuthenticationService, 
    private foodservice: FoodService){
  }
  user:any;
  ngOnInit(){
    this.getuserbyid()
    this.foodlist()
  }

  // getting a info of user for future data needed while creating a food item
  getuserbyid(){
    const userid=Number(localStorage.getItem('userid'))
    this.authservice.getuserbyid(userid)
    .subscribe((user:any)=>{
      this.user=user
      this.userid=user.userid
      this.quantity;
      this.status;
      this.address=user.useraddress;
      this.userbrand=user.userbrand;
      this.usercontact=user.usercontact
      this.userid=user.id
    })

  }

  // create a function that open dialog and send user info an info filled in form to he services
  createfood(){   
    this.getuserbyid()
    const addfooddialog =this.matdialog.open(CreatefoodComponent,{
      width:"600px",
      data:{
        userid:this.userid,
        quantity:this.quantity,
        status:this.status,
        address:this.address,
        brand:this.userbrand,
        usercontact:this.usercontact

      }
    })
    addfooddialog.afterClosed().subscribe((dataFromDialog: any) => {
      // Handle the data from the dialog, and trigger a function if needed
      this.foodlist();
    });

   
  }


// getting all foods that matches the userid from the db
  foodlist(){
    const userid=Number(localStorage.getItem('userid'))
    this.foodservice.getfoodlist(userid)
    .subscribe((foodlist:any[])=>{
      if(foodlist){
        // this.allfoodlist=foodlist;
        this.allfoodlist = foodlist.map((item, index) => ({ ...item, serialNumber: index + 1 }));
      }else{
        this.toast.error("error in fetching food list.")
      }
    })
  }

  editfood(id:number){
    const updatefooddialog = this.matdialog.open(UpdatefoodsComponent, {
      width: "600px",
      data: {
        foodid: id,
      },
    });
  // when dialog box is closed is listen and trigger the foodlist function
    updatefooddialog.afterClosed().subscribe((dataFromDialog: any) => {
      // Handle the data from the dialog, and trigger a function if needed
      this.foodlist();
    });
  }
  

  //delete function that opean dialod and send food id to the foodservice for deletion of  food from list
  deletefood(id:number){
      const deletefooddialog = this.matdialog.open(DeletefoodsComponent, {
        width: "600px",
        data: {
          foodid: id,
        },
      });
    // when dialog box is closed is listen and trigger the foodlist function
      deletefooddialog.afterClosed().subscribe((dataFromDialog: any) => {
        // Handle the data from the dialog, and trigger a function if needed
        this.foodlist();
      });
    }


}
