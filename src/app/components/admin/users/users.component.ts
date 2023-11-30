import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import{MatDialog} from '@angular/material/dialog'
import { DeleteComponent } from '../delete/delete.component';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userlist:any;
  fadelete=faTrash
  deletedialog:any;


constructor( 
    private matdialogue:MatDialog,private authservice:AuthenticationService, private toast:ToastrService){
  }
  ngOnInit() {
    this.updateuserlist();
  }
  
  deleteuser(id: number) {
    const dialogRef = this.matdialogue.open(DeleteComponent, {
      width: "600px",
      data: {
        userid: id,
      },
    });
  
    dialogRef.afterClosed().subscribe((dataFromDialog: any) => {
      // Handle the data from the dialog, and trigger a function if needed
      this.updateuserlist();
    });
  }
  
  updateuserlist() {
    this.authservice.getusers().subscribe((users) => {
      this.userlist = users;
    });
  }
}