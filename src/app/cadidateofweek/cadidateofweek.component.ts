import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as platformModule from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';
import { PageService } from '../page.service';

@Component({
  selector: 'ns-cadidateofweek',
  templateUrl: './cadidateofweek.component.html',
  styleUrls: ['./cadidateofweek.component.css'],
  moduleId: module.id
})
export class CadidateofweekComponent implements OnInit {

  imgHeight;
  constructor(private _page: Page, private routerExtensions: RouterExtensions,private userService: PageService) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    this.imgHeight = deviceHeight * 0.23;
    this.userService.onchangeIndex(false);
  }    
  
  
  close() {
    this.routerExtensions.back();
    this.userService.onchangeIndex(true);
  }
}
