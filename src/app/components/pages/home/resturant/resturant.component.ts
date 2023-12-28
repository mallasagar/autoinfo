import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css']
})
export class ResturantComponent {

  constructor( private userservice: AuthenticationService){

  }
  resturantlist:any[]=[]


  ngOnInit(){
      this.getallresturant()
  }



  getallresturant(){
      this.userservice.getusers()
      .subscribe((data:any)=>{
        this.resturantlist=data;
        console.log(this.resturantlist)
      })
  }

}
