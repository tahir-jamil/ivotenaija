import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})

export class PageService {

  private showActionBar = new Subject<any>();
  
  currentLeadUpdated$ = this.showActionBar.asObservable();


  onchangeIndex(data) {
    this.showActionBar.next(data);
  }
  
  constructor() { }

}