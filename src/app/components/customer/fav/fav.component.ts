import { Component,OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { switchMap,forkJoin, Observable, Observer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeletecartComponent } from './deletecart/deletecart.component';
import { ToastrService } from 'ngx-toastr';
import { OrderModel, Orderdetails } from 'src/app/models/ordermodel';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';
import { FoodModel } from 'src/app/models/foods.model';


@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  customerid:any;
  foodid:any;
  foodcartlist:any[] =[];
  foodidarray:any[]=[];
  fooddata:any;
  customerdata:any;
  favorder:any;
  cartid:number=0;
  // order: OrderModel= new OrderModel('','','','',1,'','','','','','','',1)
  constructor(private foodservice:FoodService,
              private customerservice:CustomerService,
              private orderservice:OrderService,
              private matdilog:MatDialog,
    private toast:ToastrService){
  }

  order:OrderModel=new OrderModel('','','','','','','','')
  orderdetail:Orderdetails= new Orderdetails('',1,'','','','')

  ngOnInit(): void {
      this.getfavfoods() 
  }

//   getFoodDetail(foodid: string) {
//     return this.foodservice.getcartfood(foodid);
//   }
  
// getfavfoods() {
//   this.customerid = Number(localStorage.getItem('userid'));

//   this.foodservice.getfavfood(this.customerid)
//     .pipe(
//       switchMap((data: any[]) => {
//         this.foodid = data.map(item => item.foodid);
//         const favOrders = data.map(item => item.favorder);

//         // Create an array of observables for fetching food by id
//         const foodObservables: Observable<{ foodDetail: FoodModel, favorder: number }>[] =
//           this.foodid.map((foodid: string, index: number) => {
//             // Use forkJoin to wait for both observables to complete
//             return forkJoin(
//               this.foodservice.getcartfood(foodid),
//               // Remove 'additionalDetail' if not used
//             ).pipe(
//               // Map the results to an object containing both food details and favorder
//               map(([foodDetail]: [FoodDetails]) => ({
//                 foodDetail,
//                 favorder: favOrders[index]
//               }))
//             );
//           });

//         // Use forkJoin to wait for all observables to complete
//         return forkJoin(foodObservables);
//       }),
//       switchMap((foodListWithDetails: any) => {
//         this.foodcartlist = foodListWithDetails;

//         // Use of to emit a new observable in the stream
//         return this.foodcartlist;
//       })
//     )
//     .subscribe(
//       (foodListWithDetails: any) => {
//         // Handle the processed foodList with details here
//       },
//       (error) => {
//         console.error('Error fetching favorite foods with details:', error);
//         // Handle the error, show a message to the user, or perform other actions as needed.
//       }
//     );
// }
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
//     .subscribe((foodList:any) => {
//     // Adding a serial number to each item in the foodList array
//     this.foodcartlist = foodList
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
        this.favorder = data.map(item => item.favorder);

        // Create an array of observables for fetching food by id
        const foodObservables = this.foodid.map((id: number) => this.foodservice.getcartfood(id));

        // Use forkJoin to wait for all observables to complete
        return forkJoin(foodObservables);
      }),
      switchMap((foodList: any) => {
        // Map the favorder to the corresponding foodid
        const foodListWithFavOrder = foodList.map((food:any, index:any) => ({
          ...food,
          favorder: this.favorder[index]
        }));

        this.foodcartlist = foodListWithFavOrder;

        // Emit a new observable in the stream
        return this.foodcartlist;
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
// getfavfoods() { 
//   this.customerid = Number(localStorage.getItem('userid'));

//   this.foodservice.getfavfood(this.customerid)
//     .pipe(
//       switchMap((data: any[]) => {
//         this.foodid = data.map(item => item.foodid);
//         const favOrders = data.map(item => item.favorder);
      

//         // Create an array of observables for fetching food by id
        
//         const foodObservables = this.foodid.map((id: number) => this.foodservice.getcartfood(id));

//         // Use forkJoin to wait for all observables to complete
//         return forkJoin(foodObservables);
//       }),
//       switchMap((foodList: any) => {
//           this.foodcartlist=foodList
          

//         // Use of to emit a new observable in the stream
//         return this.foodcartlist;
//       })
//     )
//     .subscribe(
//       (foodList: any) => {
        
//         // Handle the processed foodList here
//       },
//       (error) => {
//         console.error('Error fetching favorite foods:', error);
//         // Handle the error, show a message to the user, or perform other actions as needed.
//       }
//     );
// }

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

getcustomerdetail(){
  // const customerid= Number(localStorage.getItem('userid'))
  // this.customerservice.getcustomerbyid(customerid)
  //   .subscribe((customerdata:any)=>{
  //     this.customerdata=customerdata;
  //   })
}

buyall(){
  this.getcustomerdetail()
  const customerid= Number(localStorage.getItem('userid'))
  this.customerservice.getcustomerbyid(customerid)
    .subscribe((customerdata:any)=>{
      if(customerdata){
      this.customerdata=customerdata;
      this.order.customername=this.customerdata.customername
      this.order.customeraddress=this.customerdata.customeraddress
      this.order.customercontact=this.customerdata.customercontact
      this.order.customerid=this.customerdata.id
      this.order.orderstatus="requested"
      this.order.time=String(Date())
     
      
      for(let i=0;i<this.foodcartlist.length;i++ ){
        const orderdetail= new Orderdetails('',1,'','','','');
          orderdetail.orderbrandid=this.foodcartlist[i].userid,
          orderdetail.orderbrandname=this.foodcartlist[i].foodmakerbrand,
          orderdetail.ordername=this.foodcartlist[i].foodname,
          orderdetail.orderprice=this.foodcartlist[i].foodprice,
          orderdetail.orderquantity=this.foodcartlist[i].favorder,
          // orderdetail.orderquantity = this.foodcartlist[i].foodquantity;
          orderdetail.ordertotalprice = (this.foodcartlist[i].foodquantity * this.foodcartlist[i].foodprice).toString();
          this.order.order.push(orderdetail);   
        
          this.order.totalprice=orderdetail.ordertotalprice
        //   for(let j=0;j<this.foodcartlist.length;j++){
        //     orderdetail.orderquantity[j]
        //   }
        //   orderdetail.ordertotalprice[i],
        //   this.order.order.push(orderdetail)
        }
    

          this.orderservice.createorder(this.order)
          .subscribe((success)=>{
            if(success){
              this.deleteallcart()
              this.toast.success("Order created successfully")
            }
            else{
              this.toast.error("Order creation failed")
            }})        
        }else{
            this.toast.error("there is error  in carts")
          }

        })
     
        
        
  }


  deleteallcart(){
      const customerid=Number(localStorage.getItem("userid"))
      this.foodservice.getmarkfood(customerid)
      .subscribe((data:any)=>{
        for(let i=0;i<data.length;i++){
          this.cartid=Number(data[i].id)
          this.foodservice.deletemarkedfood(this.cartid)
          .subscribe((success)=>{
            if(success){
              this.getfavfoods()
            }
          }) 
        }
        if(data){
          // this.toast.success("Successfully deleted cart")
        }
      })

  }


}
