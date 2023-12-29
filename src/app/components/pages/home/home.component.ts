import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FoodService } from 'src/app/services/food.service';
import { MatDialog} from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';
import { faSquarePlus} from '@fortawesome/free-solid-svg-icons';
import { ShareddataService } from 'src/app/services/shareddata.service';
import { favFoodModel } from 'src/app/models/favfood.model';
import { SingleorderComponent } from '../../customer/order/singleorder/singleorder.component';
import { FavorderComponent } from '../../customer/fav/favorder/favorder.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foodlist:any[] = [];
  drinklist:any[] = [];
  fabookmark=faSquarePlus;
  searchText:string=''
  customerstatus:boolean=false;
  foodmark:string[]=[]
  favfood:favFoodModel=new favFoodModel( 0,0,1 );
  categoryselected:string='';
  resturantselected:number=0;
  
  constructor(private foodservice:FoodService, 
              private toast: ToastrService, 
              private matdialog: MatDialog,
              private sharedservice:ShareddataService,){}

showsearch:Boolean = false;
foodbookmark:any;


  ngOnInit(){
    this.getallfood()
    this.sharedservice.searchTextChanged$.subscribe((searchtext)=>{
      this.searchText=searchtext;
    })
    this.sharedservice.categoryTextChanged$.subscribe((categorydata)=>{
      this.categoryselected=categorydata;
    })
    this.sharedservice.resturanttextchanged$.subscribe((resturantdata)=>{
      this.resturantselected=resturantdata
      console.log(this.resturantselected)
    })
 
  }

  checkcustomerloggedin(){
    const customerstatus=Boolean(localStorage.getItem('isloggedin'))
    if(customerstatus&&(localStorage.getItem('userrole')==='customer'))
    {
      this.customerstatus=true;
    }else{
      this.customerstatus=false;
      this.toast.warning("customer is needs to  logged in")
      // this.route.navigate(['/signin'])
    }
  }

  buyfood(id:number){
    this.checkcustomerloggedin()
    if(this.customerstatus){
      const confirmorderdilog = this.matdialog.open(SingleorderComponent, {
        width: "600px",
        data: {
          foodid:id,
        },
      });
    confirmorderdilog.afterClosed().subscribe((dataFromDialog: any) => {
        this.getallfood();
        // Handle the data from the dialog, and trigger a function if needed
      });
    }
  }

  markfood(id:string){
    this.checkcustomerloggedin()
    if(this.customerstatus){
      const customerid=Number(localStorage.getItem('userid'))
      this.favfood.userid=customerid;
      this.favfood.foodid=Number(id);
      this.foodbookmark=this.favfood
      // check if food is already marked or not
      this.foodservice.checkfoodmark(this.foodbookmark)
        .subscribe((success:boolean)=>{
         if(!success){
          this.matdialog.open(FavorderComponent,{
            width:"200px",
            height:"200px",
            data:{
              customerid:customerid,
              foodid:id
            }
      })
         }else{
          this.toast.error("Food is already marked as favorite in your favorite   list.")
         }
        })      
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
