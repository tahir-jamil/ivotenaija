import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tu-tabs-bar',
  templateUrl: './tabs-bar.component.html',
  styleUrls: ['./tabs-bar.component.css'],
  moduleId: module.id
})
export class TabsBarComponent implements OnInit {

  @Input() filters = [];

  @Output() indexChange = new EventEmitter;
  
  imgwidth;
  imgHeight;
  tabPadding;

  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }


  tabIndexChanged(newIndex) {
    this.selectedIndex = newIndex;
    console.log(newIndex);
    
    this.indexChange.emit(this.selectedIndex);
  }

  get activeTabIndex() {
    return this.selectedIndex;
  }

}
