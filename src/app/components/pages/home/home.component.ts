import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FoodService } from 'src/app/services/food.service';
import { MatDialog} from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foodlist:any[] = [];
  drinklist:any[] = [];
  constructor(private foodservice:FoodService, private toast: ToastrService, private matdialog: MatDialog){

  }

  // Pagination properties
  itemsPerPage: number = 5;
  currentPage: number = 1;

  // Calculate the start and end index for the displayed items
  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return this.currentPage * this.itemsPerPage;
  }

  // Method to change the current page
  changePage(newPage: number): void {
    this.currentPage = newPage;
  }

  getPages(): number[] {
    const totalItems = this.foodlist.length;
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  ngOnInit(){
    this.getallfood()
    this.getalldrink()
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
          this.getalldrink()
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
  getalldrink(){
    this.foodservice.getalldrinks()
      .subscribe((drinklist:any[])=>{
        if(drinklist){
          this.drinklist = drinklist.map((item, index) => ({ ...item, serialNumber: index + 1 }));
        
        }else{
          this.toast.error("error in fetching drinklist.")
        }
    })
  }

}
