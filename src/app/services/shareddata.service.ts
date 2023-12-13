import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  constructor() { }

  private searchTextChangedSource = new BehaviorSubject<string>('');
  searchTextChanged$ = this.searchTextChangedSource.asObservable();

  setSearchText(searchText: string) {
    this.searchTextChangedSource.next(searchText);
  }

}
