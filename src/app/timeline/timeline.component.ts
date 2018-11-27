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

  iconWidht;
  iconHeight;
  circleImgHeight;
  circleImgWidth;

  askQuestionBoolean = false;
  Endorse = "Endorse";
  constructor(private _page: Page,private router: RouterExtensions) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;;
     let deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.searchBarheight = deviceHeight * 0.085;
    this.iconWidht = deviceWidth * 0.1;
    this.iconHeight = deviceHeight * 0.07;

    this.circleImgWidth = deviceWidth * 0.31;
    this.circleImgHeight = deviceHeight * 0.17;
    
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
      if (this.Endorse == 'Endorsed') {
        this.Endorse = 'Endorse';
      } else {
        this.Endorse = 'Endorsed';
      }
  }

  get getIamge() {
    if (this.Endorse == 'Endorsed') {
      return 'res://endorsed';
    } else {
      return 'res://endorse';
    }
  }
}
