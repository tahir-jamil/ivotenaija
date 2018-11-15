import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { PostsComponent } from './posts/posts.component';
import { BioComponent } from './bio/bio.component';
import { EndorsedCandidateComponent } from './endorsed-candidate/endorsed-candidate.component';
import { TabsBarComponent } from './tabs-bar/tabs-bar.component';
import { TabPageComponent } from './tabs/tab-page/tab-page.component';
import { TabsComponent } from './tabs/tabs.component';
import { PagerModule } from "nativescript-pager/angular";

@NgModule({
  imports: [
    CommonModule,
    PagerModule
  ],
  entryComponents: [PostsComponent,BioComponent,EndorsedCandidateComponent,],
  declarations: [TimelineComponent,PostsComponent,BioComponent,EndorsedCandidateComponent,TabsBarComponent,TabPageComponent,TabsComponent]
})
export class TimelineModule { }
