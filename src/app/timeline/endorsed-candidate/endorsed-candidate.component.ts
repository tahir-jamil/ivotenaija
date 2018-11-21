import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';

@Component({
  selector: 'ns-endorsed-candidate',
  templateUrl: './endorsed-candidate.component.html',
  styleUrls: ['./endorsed-candidate.component.css'],
  moduleId: module.id
})
export class EndorsedCandidateComponent implements OnInit {
  
  imgWidth;
  imgHeight;
  boxWidth;
  boxHeight;

  constructor() { }
  
  posts = ['a','b','c','b','c','b','c','b','c','b','c'];
  
  ngOnInit() {
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    let deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.imgWidth = deviceWidth * 0.22;
    this.imgHeight = deviceHeight * 0.13;

    this.boxWidth = deviceWidth * 0.29;
    this.boxHeight = deviceHeight * 0.14;
  }

}
