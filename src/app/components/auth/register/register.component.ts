import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/users.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // creating an enpty instance of the user model
  user:UserModel=new UserModel( '','', '', '', '' , '', );
  emails: string[] = [];
  emailnumber:number=0;
  allemail:any;
  emailexist:boolean=false;
  constructor(private authservice:AuthenticationService,private route:Router, private toast:ToastrService){

  }
  // adding user if form is valid
  RegisterUser(){
    // get all user emails list in array 
    this.authservice.checkEmailExists()
      .subscribe((emails)=>{
        this.emails = emails;
        this.emailnumber = this.emails.length;
             for(let i=0;i<this.emailnumber; i++){
            if(this.emails[i]===this.user.useremail){
              this.emailexist=true;
              break;
            }else{
              this.emailexist=false;
            }
          }
          // check useremail exist already or not!
          if(this.emailexist===true){
            this.toast.error("email already exist")
          }
          else{
              this.addusers()
             

          }
      })
  }

// add users to the list of users
  addusers(){
      // add the users
      this.authservice.addusers(this.user)
      .subscribe(response=>{
        if(response){
      // item.reset();
         this.toast.success("Registered successfully.")
          this.resetForm();
          this.route.navigate(['/login']);
          
        }else{this.toast.error("Failed to register")}
      },
      (error) => {
        console.error('Error during registration:', error);
        this.toast.error('Failed to register. Please try again.');
      }
)
  }

  // clear a registration form the user forms or usermodel
  private resetForm() {
    // Reset the form or clear the user object based on your requirements
    this.user = new UserModel('','', '', '', '', '',  );
  }
}
