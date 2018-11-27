import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { TimelineComponent } from "./timeline/timeline.component";
import { SignupComponent } from "./signup/signup.component";
import { CadidateofweekComponent } from "./cadidateofweek/cadidateofweek.component";
import { FeedPageComponent } from "./feedPage/feedPage.component";
import { ItalkComponent } from "./italk/italk.component";
import { SearchComponent } from "./search/search.component";
import { MoreComponent } from "./more/more.component";
import { FeeddetailComponent } from "./feeddetail/feeddetail.component";

const routes: Routes = [
    { path: "", redirectTo: "/feed", pathMatch: "full" },
    { path: "signup", component: SignupComponent },
    { path: "timeline", component: TimelineComponent },
    { path: "candiofweek", component: CadidateofweekComponent },
    { path: "feed", component: FeedPageComponent },
    { path: "italk", component: ItalkComponent },
    { path: "search", component: SearchComponent },
    { path: "more", component: MoreComponent },
    { path: "feedDetail", component: FeeddetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }