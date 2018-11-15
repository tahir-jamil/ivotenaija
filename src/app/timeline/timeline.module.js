"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var timeline_component_1 = require("./timeline.component");
var posts_component_1 = require("./posts/posts.component");
var bio_component_1 = require("./bio/bio.component");
var endorsed_candidate_component_1 = require("./endorsed-candidate/endorsed-candidate.component");
var tabs_bar_component_1 = require("./tabs-bar/tabs-bar.component");
var tab_page_component_1 = require("./tabs/tab-page/tab-page.component");
var tabs_component_1 = require("./tabs/tabs.component");
var angular_1 = require("nativescript-pager/angular");
var TimelineModule = /** @class */ (function () {
    function TimelineModule() {
    }
    TimelineModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                angular_1.PagerModule
            ],
            entryComponents: [posts_component_1.PostsComponent, bio_component_1.BioComponent, endorsed_candidate_component_1.EndorsedCandidateComponent,],
            declarations: [timeline_component_1.TimelineComponent, posts_component_1.PostsComponent, bio_component_1.BioComponent, endorsed_candidate_component_1.EndorsedCandidateComponent, tabs_bar_component_1.TabsBarComponent, tab_page_component_1.TabPageComponent, tabs_component_1.TabsComponent]
        })
    ], TimelineModule);
    return TimelineModule;
}());
exports.TimelineModule = TimelineModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGltZWxpbmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQywyREFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELHFEQUFtRDtBQUNuRCxrR0FBK0Y7QUFDL0Ysb0VBQWlFO0FBQ2pFLHlFQUFzRTtBQUN0RSx3REFBc0Q7QUFDdEQsc0RBQXlEO0FBVXpEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBUjFCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWTtnQkFDWixxQkFBVzthQUNaO1lBQ0QsZUFBZSxFQUFFLENBQUMsZ0NBQWMsRUFBQyw0QkFBWSxFQUFDLHlEQUEwQixFQUFFO1lBQzFFLFlBQVksRUFBRSxDQUFDLHNDQUFpQixFQUFDLGdDQUFjLEVBQUMsNEJBQVksRUFBQyx5REFBMEIsRUFBQyxxQ0FBZ0IsRUFBQyxxQ0FBZ0IsRUFBQyw4QkFBYSxDQUFDO1NBQ3pJLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO0FBQWxCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUaW1lbGluZUNvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUuY29tcG9uZW50JztcbmltcG9ydCB7IFBvc3RzQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0cy9wb3N0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmlvQ29tcG9uZW50IH0gZnJvbSAnLi9iaW8vYmlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbmRvcnNlZENhbmRpZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vZW5kb3JzZWQtY2FuZGlkYXRlL2VuZG9yc2VkLWNhbmRpZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFic0JhckNvbXBvbmVudCB9IGZyb20gJy4vdGFicy1iYXIvdGFicy1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYlBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3RhYnMvdGFiLXBhZ2UvdGFiLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tICcuL3RhYnMvdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBhZ2VyL2FuZ3VsYXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQYWdlck1vZHVsZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQb3N0c0NvbXBvbmVudCxCaW9Db21wb25lbnQsRW5kb3JzZWRDYW5kaWRhdGVDb21wb25lbnQsXSxcbiAgZGVjbGFyYXRpb25zOiBbVGltZWxpbmVDb21wb25lbnQsUG9zdHNDb21wb25lbnQsQmlvQ29tcG9uZW50LEVuZG9yc2VkQ2FuZGlkYXRlQ29tcG9uZW50LFRhYnNCYXJDb21wb25lbnQsVGFiUGFnZUNvbXBvbmVudCxUYWJzQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lbGluZU1vZHVsZSB7IH1cbiJdfQ==