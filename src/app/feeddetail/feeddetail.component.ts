import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { PageService } from '../page.service';

@Component({
  selector: 'ns-feeddetail',
  templateUrl: './feeddetail.component.html',
  styleUrls: ['./feeddetail.component.css'],
  moduleId: module.id
})
export class FeeddetailComponent implements OnInit {

  constructor(private _page: Page, private routerExtensions: RouterExtensions, private userPage: PageService) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  goBack() {
    this.routerExtensions.back();
  }
}
