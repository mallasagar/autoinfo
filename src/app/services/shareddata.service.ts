import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  constructor() { }

  private searchTextChangedSource = new BehaviorSubject<string>('');
  private categorychanged=new BehaviorSubject<string>('all');
  searchTextChanged$ = this.searchTextChangedSource.asObservable();
  categoryTextChanged$ = this.categorychanged.asObservable();

  setSearchText(searchText: string) {
    this.searchTextChangedSource.next(searchText);
  }

  setcategory(category: string) {
    this.categorychanged.next(category);
  }

}
