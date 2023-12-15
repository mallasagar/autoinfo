import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FoodService } from 'src/app/services/food.service';
import { MatDialog} from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';
import { faBook, faBookmark,faGem} from '@fortawesome/free-solid-svg-icons';
import { ShareddataService } from 'src/app/services/shareddata.service';
import { Router } from '@angular/router';
import { favFoodModel } from 'src/app/models/favfood.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foodlist:any[] = [];
  drinklist:any[] = [];
  fabookmark=faBookmark;
  searchText:string=''
  customerstatus:boolean=false;
  foodmark:string[]=[]
  favfood:favFoodModel=new favFoodModel( 0,0 );
  categoryselected:string='';
  
  constructor(private foodservice:FoodService, 
              private toast: ToastrService, 
              private matdialog: MatDialog,
              private route: Router,
              private sharedservice:ShareddataService){

  }




  ngOnInit(){
    this.getallfood()
    this.sharedservice.searchTextChanged$.subscribe((searchtext)=>{
      this.searchText=searchtext;
      // this.foodservice.getfoodbyname(this.searchText)
      // .subscribe((searchfood)=>{
      //   this.foodlist=searchfood
      // })
    })
    this.sharedservice.categoryTextChanged$.subscribe((categorydata)=>{
      this.categoryselected=categorydata;
     
    })
    
   
  }


  checkcustomerloggedin(){
    const customerstatus=Boolean(localStorage.getItem('isloggedin'))
    if(customerstatus&&(localStorage.getItem('userrole')==='customer'))
    {
      this.customerstatus=true;
    }else{
      this.toast.warning("customer is needs to  logged in")
      this.route.navigate(['/signin'])
    }
  }

  buyfood(id:number){
    this.checkcustomerloggedin()
    if(this.customerstatus){
      this.toast.success("further process isto be done.")
    }
    
  }
  
  markfood(id:string){
    this.checkcustomerloggedin()
    if(this.customerstatus){
      const customerid=localStorage.getItem('userid')
      this.foodservice.markfood(id)
      const arrayofdat=customerid+id
      this.foodmark.push(arrayofdat)
      console.log(this.foodmark)
    }
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

  getallfood(){
    this.foodservice.getallfoods()
      .subscribe((foodlist:any[])=>{
        if(foodlist){
          this.foodlist = foodlist.map((item, index) => ({ ...item, serialNumber: index + 1 }));
        }else{
          this.toast.error("error in fetching food list.")
        }
    })
  }


}
