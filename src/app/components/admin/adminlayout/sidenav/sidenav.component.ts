import { Component } from '@angular/core';

import { faDashboard,faTruckFast ,faGear,faTrash , faBox, faList, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  constructor(private authservice:AuthenticationService, private toast:ToastrService){

  }
  fadash=faDashboard;
  facart=faTruckFast
  falogout=faRightFromBracket
  
  fauserlist=faList
  logout(){
    this.authservice.clearcredential()
  }

}
