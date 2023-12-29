import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  constructor() { }
  private searchTextChangedSource = new BehaviorSubject<string>('');
  private categorychanged=new BehaviorSubject<string>('all');
  private resturantchanged=new BehaviorSubject<number>( 0);
  searchTextChanged$ = this.searchTextChangedSource.asObservable();
  categoryTextChanged$ = this.categorychanged.asObservable();
  resturanttextchanged$= this.resturantchanged.asObservable();

  setSearchText(searchText: string) {
    this.searchTextChangedSource.next(searchText);
  }

  setcategory(category: string) {
    this.categorychanged.next(category);
  }
  setresturants(resturant:number){
    this.resturantchanged.next(resturant);
  }

}
