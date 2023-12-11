import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-usersidenav',
  templateUrl: './usersidenav.component.html',
  styleUrls: ['./usersidenav.component.css']
})
export class UsersidenavComponent {
  constructor(private authservice:AuthenticationService){}
userId:number=0;
brandname:string='';

ngOnInit(){
const userid=Number(localStorage.getItem('userid'))

this.getuserinfo(userid)
}

getuserinfo(id:number){
  this.authservice.getuserbyid(id)
  .subscribe((user:any)=>{
    this.brandname = user.userbrand;
  })

}



  logout(){
    this.authservice.clearcredential()
  }

}
