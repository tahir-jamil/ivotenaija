import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as platformModule from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-cadidateofweek',
  templateUrl: './cadidateofweek.component.html',
  styleUrls: ['./cadidateofweek.component.css'],
  moduleId: module.id
})
export class CadidateofweekComponent implements OnInit {

  imgHeight;
  constructor(private _page: Page, private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    this.imgHeight = deviceHeight * 0.23;
  }

  close() {
    this.routerExtensions.back();
  }
}
