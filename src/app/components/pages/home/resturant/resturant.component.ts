import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ShareddataService } from 'src/app/services/shareddata.service';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css']
})
export class ResturantComponent {

  constructor( private userservice: AuthenticationService, private sharedservice:ShareddataService){

  }
  resturantlist:any[]=[]


  ngOnInit(){
      this.getallresturant()
  }

setresturant(id:number){
  this.sharedservice.setresturants(id)
}

  getallresturant(){
      this.userservice.getusers()
      .subscribe((data:any)=>{
        this.resturantlist=data;      
      })
  }

}
