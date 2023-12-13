import { Component } from '@angular/core';
import { ShareddataService } from 'src/app/services/shareddata.service';

@Component({
  selector: 'app-customerlayout',
  templateUrl: './customerlayout.component.html',
  styleUrls: ['./customerlayout.component.css']
})
export class CustomerlayoutComponent {
  currentdate=new Date();
  searchText:string=''

  constructor(private sharedservice:ShareddataService){

  }


  onSearchedTextEntered(searchText:string){
    this.sharedservice.setSearchText(searchText);
    }
}
