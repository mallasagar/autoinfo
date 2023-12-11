import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/users.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router,NavigationEnd } from '@angular/router';
import { UserroleService} from 'src/app/services/userrole.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  currentRoute: string='';
  user:UserModel=new UserModel( '','', '', '', '' , '', );

  constructor(private authservice: AuthenticationService,
              private route:Router, 
              private toast: ToastrService,
              private userroleservice:UserroleService){}
          
  LoginUser(){
    // check user email is valid or not
    this.authservice.checkemailforlogin(this.user.useremail)
    // subscribe data if useremail is valid
    .subscribe((data:any)=>{
      if(data){
        // if data exist call checkpassword functions
        this.checkpassword()
      }else{
        this.toast.error("Email does not exist")
      }
    })
  }

// check password function
  checkpassword(){
    //again  send the useremail and userpassword to the authservice 
    this.authservice.getloggedinuser(this.user.useremail, this.user.userpassword)
    // subscribe a data if any data exist
    .subscribe((user:any)=>{
      if(user)
        {
        this.user=user;
         console.log(user)
         this.checkuserrole()
        //  this.authservice.getRole(u);
          localStorage.setItem('userid',user.id);
          localStorage.setItem('userrole',user.userrole);
          localStorage.setItem('isloggedin','true');
          this.authservice.getloggedinuserrole(user.username, user.userpassword, user.userrole)
          this.userroleservice.setUserRole()
          this.resetlogin()
          
        }
        else{
          this.toast.error("Invalid password")
        } 
    })
  }


    

// reset login form
  resetlogin(){
   this.user = new UserModel('','', '', '', '', '',  );
    }

//checkuser roles
checkuserrole(){
    if(this.user.userrole==='admin'){
      this.toast.success("Welcome admin ")
      this.route.navigate(['/admin']);
    }else if(this.user.userrole==='user'){
      this.toast.success("Welcome "+ this.user.username)
      this.route.navigate(['/user']);
    }else{
      this.toast.error("Invalid user!!")
      this.route.navigate(['/error']);
    }
  }    
}
