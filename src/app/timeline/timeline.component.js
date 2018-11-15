"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bio_component_1 = require("./bio/bio.component");
var posts_component_1 = require("./posts/posts.component");
var endorsed_candidate_component_1 = require("./endorsed-candidate/endorsed-candidate.component");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var platformModule = require("tns-core-modules/platform");
var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(_page, router) {
        this._page = _page;
        this.router = router;
        this.filters = [
            { name: "Bio" },
            { name: "Posts" },
            { name: "Endorsed candidates" }
        ];
        this.components = [
            { component: bio_component_1.BioComponent },
            { component: posts_component_1.PostsComponent },
            { component: endorsed_candidate_component_1.EndorsedCandidateComponent },
        ];
    }
    TimelineComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        var deviceHeight = platformModule.screen.mainScreen.heightDIPs;
        this.searchBarheight = deviceHeight * 0.085;
    };
    TimelineComponent.prototype.tabIndexChanged = function (index) {
        this.selectedIndex = index;
    };
    TimelineComponent.prototype.pagerIndexChanged = function (index) {
        this.selectedIndex = index;
    };
    TimelineComponent.prototype.navigateTo = function (path) {
        this.router.navigate([path], {
            transition: {
                name: 'fade',
                curve: 'linear'
            }
        });
    };
    TimelineComponent = __decorate([
        core_1.Component({
            selector: 'ns-timeline',
            templateUrl: './timeline.component.html',
            styleUrls: ['./timeline.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFEQUFtRDtBQUNuRCwyREFBeUQ7QUFDekQsa0dBQStGO0FBQy9GLHNEQUFxRDtBQUNyRCxzREFBK0Q7QUFDL0QsMERBQTREO0FBUTVEO0lBTUUsMkJBQW9CLEtBQVcsRUFBUyxNQUF3QjtRQUE1QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFRaEUsWUFBTyxHQUFHO1lBQ1IsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO1lBQ2YsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQ2pCLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1NBQ2hDLENBQUM7UUFFRixlQUFVLEdBQUc7WUFDWCxFQUFFLFNBQVMsRUFBRSw0QkFBWSxFQUFFO1lBQzNCLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7WUFDN0IsRUFBRSxTQUFTLEVBQUUseURBQTBCLEVBQUU7U0FDMUMsQ0FBQztJQWxCa0UsQ0FBQztJQUVyRSxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksWUFBWSxHQUFXLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUN2RSxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUMsQ0FBQztJQWVELDJDQUFlLEdBQWYsVUFBZ0IsS0FBSztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsNkNBQWlCLEdBQWpCLFVBQWtCLEtBQUs7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUdELHNDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLFFBQVE7YUFDaEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBM0NVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FPMkIsV0FBSSxFQUFpQix5QkFBZ0I7T0FOckQsaUJBQWlCLENBNkM3QjtJQUFELHdCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7QUE3Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJpb0NvbXBvbmVudCB9IGZyb20gJy4vYmlvL2Jpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9zdHNDb21wb25lbnQgfSBmcm9tICcuL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbmRvcnNlZENhbmRpZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vZW5kb3JzZWQtY2FuZGlkYXRlL2VuZG9yc2VkLWNhbmRpZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXRpbWVsaW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGltZWxpbmUuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBzZWFyY2hCYXJoZWlnaHQ6IG51bWJlcjtcbiAgc2VsZWN0ZWRJbmRleDtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UscHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICBsZXQgZGV2aWNlSGVpZ2h0OiBudW1iZXIgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzO1xuICAgIHRoaXMuc2VhcmNoQmFyaGVpZ2h0ID0gZGV2aWNlSGVpZ2h0ICogMC4wODU7XG4gIH1cblxuICBmaWx0ZXJzID0gW1xuICAgIHsgbmFtZTogXCJCaW9cIiB9LFxuICAgIHsgbmFtZTogXCJQb3N0c1wiIH0sXG4gICAgeyBuYW1lOiBcIkVuZG9yc2VkIGNhbmRpZGF0ZXNcIiB9XG4gIF07XG5cbiAgY29tcG9uZW50cyA9IFtcbiAgICB7IGNvbXBvbmVudDogQmlvQ29tcG9uZW50IH0sXG4gICAgeyBjb21wb25lbnQ6IFBvc3RzQ29tcG9uZW50IH0sXG4gICAgeyBjb21wb25lbnQ6IEVuZG9yc2VkQ2FuZGlkYXRlQ29tcG9uZW50IH0sXG4gIF07XG5cblxuICB0YWJJbmRleENoYW5nZWQoaW5kZXgpIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHBhZ2VySW5kZXhDaGFuZ2VkKGluZGV4KSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gIH1cblxuXG4gIG5hdmlnYXRlVG8ocGF0aCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwYXRoXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiAnZmFkZScsXG4gICAgICAgIGN1cnZlOiAnbGluZWFyJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==