import { Component,OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { switchMap,forkJoin, Observable, Observer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeletecartComponent } from './deletecart/deletecart.component';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  customerid:any;
  foodid:any;
  foodcartlist:any[] =[];
  constructor(private foodservice:FoodService,private matdilog:MatDialog,
    private toast:ToastrService){
  }

  ngOnInit(): void {
      this.getfavfoods()
     
  }

  // dealing with cynchronouse methods
  // getfavfood(){
  //   this.customerid=Number(localStorage.getItem('userid'))
  //   this.foodservice.getfavfood(this.customerid)
  //   .subscribe((data: any[]) => {
  //     // Assuming 'data' is an array of objects with a 'foodid' property
  //     this.foodid = data.map(item => item.foodid);
  //     for(let i=0;i<this.foodid.length;i++){
  //       this.foodservice.getfoodbyid(this.foodid[i])
  //       .subscribe((food)=>{
  //         this.foodcartlist.push(food);
  //       })
  //     }
  //   });
  // }


// handling asynchronously with switchmap, forkjoin

// getfavfoods() { 
//   this.customerid = Number(localStorage.getItem('userid'));

//   this.foodservice.getfavfood(this.customerid)
//     .pipe(
//       switchMap((data: any[]) => {
//         this.foodid = data.map(item => item.foodid);

//         // Create an array of observables for fetching food by id
//         const foodObservables = this.foodid.map((id:number)=> this.foodservice.getcartfood(id));

//         // Use forkJoin to wait for all observables to complete
//         return forkJoin(foodObservables);
//       })
//     )
//     of().subscribe((foodList:any) => {
//     // Adding a serial number to each item in the foodList array
//     this.foodcartlist = foodList.map((food:any, index:number) => ({ ...food, serialNumber: index + 1 }));
//     console.log(this.foodcartlist)
//     },
//     (error) => {
//       console.error('Error fetching favorite foods:', error);
//       // Handle the error, show a message to the user, or perform other actions as needed.
//     }
//     );
// }


getfavfoods() { 
  this.customerid = Number(localStorage.getItem('userid'));

  this.foodservice.getfavfood(this.customerid)
    .pipe(
      switchMap((data: any[]) => {
        this.foodid = data.map(item => item.foodid);

        // Create an array of observables for fetching food by id
        const foodObservables = this.foodid.map((id: number) => this.foodservice.getcartfood(id));

        // Use forkJoin to wait for all observables to complete
        return forkJoin(foodObservables);
      }),
      switchMap((foodList: any) => {
        // Adding a serial number to each item in the foodList array
        this.foodcartlist = foodList.map((food: any, index: number) => ({ ...food, serialNumber: index + 1 }));
        console.log(this.foodcartlist);

        // Use of to emit a new observable in the stream
        return of(this.foodcartlist);
      })
    )
    .subscribe(
      (foodList: any) => {
        // Handle the processed foodList here
      },
      (error) => {
        console.error('Error fetching favorite foods:', error);
        // Handle the error, show a message to the user, or perform other actions as needed.
      }
    );
}

deletecart(id:number){
  this.foodservice.getcartbyid(id)
  .subscribe((food)=>{
    const cartid=food.id;
    // this.foodservice.deletefoodcart(cartid)
    // .subscribe((success)=>{
    //   this.toast.success("Cart deleted successfully")
    //   this.getfavfoods();
    // },(error)=>{
    //   this.toast.error("Error while deleting a Cart")
    // })
  const deletecartdilog = this.matdilog.open(DeletecartComponent, {
    width: "600px",
    data: {
      cartid: cartid,
    },
  });
  deletecartdilog.afterClosed().subscribe((dataFromDialog: any) => {
    this.getfavfoods();
    // Handle the data from the dialog, and trigger a function if needed
  });
})
}




}
