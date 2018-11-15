import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { isIOS } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'tu-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  moduleId: module.id
})
export class TabsComponent implements OnInit {

  @ViewChild("pager") pager: any;
  
  @Input() components = [];
  @Input() disableSwipe = false;
  @Input() selectedIndex;
  @Input() row = "0";
  @Output() pagerIndexChanged = new EventEmitter;

  isItemVisible = false;
  primaryBackground;
  
  constructor() {

  }
  
  ngOnInit(): void {
  }
  
  onLoaded() {
    this.isItemVisible = true;
  }
  
  currentPagerIndex = 0;
  latestReceivedIndex = 0;
  
  items: any;

  


  loadedImage($event) {
  }

  @ViewChild('scroll') scroll: ElementRef;


  onIndexChanged($event) {
    debugObj($event);
    this.latestReceivedIndex = $event.value;
    this.selectedIndex = $event.value;
    this.pagerIndexChanged.emit(this.selectedIndex);
  }

  pageChanged(index: number) {
    debugObj(index);
  }
}

function debugObj(obj: any) {
  for (const key of Object.keys(obj)) {
  }
}
