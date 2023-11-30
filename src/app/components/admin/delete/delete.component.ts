import { Component } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import {Inject} from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
// import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private authservice:AuthenticationService,
  // private dialogRef: MatDialogRef<UsersComponent>,
  private toast:ToastrService){
  }

ngOninit(){}

confirmdelete(){
  console.log(this.data.userid)
  this.authservice.deleteuser(this.data.userid)
   .subscribe((user)=>{
     if(user){
       this.toast.success("user deleted successfully")
      // this.dialogRef.updateuserlist('refresh')
       }else{
        this.toast.error("user already deleted")
       }
   })
  }
}
