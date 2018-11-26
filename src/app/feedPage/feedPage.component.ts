import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-feedPage',
  templateUrl: './feedPage.component.html',
  styleUrls: ['./feedPage.component.css'],
  moduleId: module.id
})
export class FeedPageComponent implements OnInit, AfterViewInit {
  
  @ViewChild("secondTextFieldId") secondTextFieldId: ElementRef;
  posts = ['a','b','c'];
  
  constructor(private _page: Page,private routerExtensions: RouterExtensions) { }

  ngOnInit() { 
    this._page.actionBarHidden = true;
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.secondTextFieldId.nativeElement.focus();
    }, 600);
  }


  
  navtocadiofweek() {
     this.routerExtensions.navigate(['/candiofweek'], {
         transition: {
         name: 'slideTop',
         curve: 'linear'
         }
     });
  }
}
