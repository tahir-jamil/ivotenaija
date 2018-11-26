import { Component, OnInit } from '@angular/core';
import { BioComponent } from './bio/bio.component';
import { PostsComponent } from './posts/posts.component';
import { EndorsedCandidateComponent } from './endorsed-candidate/endorsed-candidate.component';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import * as platformModule from 'tns-core-modules/platform';

@Component({
  selector: 'ns-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  moduleId: module.id
})
export class TimelineComponent implements OnInit {

  searchBarheight: number;
  selectedIndex;

  askQuestionBoolean = false;
  Endorse = "Endorse";
  constructor(private _page: Page,private router: RouterExtensions) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    this.searchBarheight = deviceHeight * 0.085;
  }

  filters = [
    { name: "Bio" },
    { name: "Posts" },
    { name: "Endorsed candidates" }
  ];

  components = [
    { component: BioComponent },
    { component: PostsComponent },
    { component: EndorsedCandidateComponent },
  ];


  tabIndexChanged(index) {
    this.selectedIndex = index;
  }

  pagerIndexChanged(index) {
    this.selectedIndex = index;
  }


  navigateTo(path) {
    this.router.navigate([path], {
      transition: {
        name: 'fade',
        curve: 'linear'
      }
    });
  }

  askQuestion() {
    this.askQuestionBoolean = true;
  }
  
  send() {
    this.askQuestionBoolean = false;
  }

  public tvtext = "";


  changeEndorsed() {
      this.Endorse = "Endorsed"
  }

}
