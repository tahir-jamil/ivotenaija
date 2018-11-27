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
        this.askQuestionBoolean = false;
        this.Endorse = "Endorse";
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
        this.tvtext = "";
    }
    TimelineComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        var deviceHeight = platformModule.screen.mainScreen.heightDIPs;
        ;
        var deviceWidth = platformModule.screen.mainScreen.widthDIPs;
        this.searchBarheight = deviceHeight * 0.085;
        this.iconWidht = deviceWidth * 0.1;
        this.iconHeight = deviceHeight * 0.07;
        this.circleImgWidth = deviceWidth * 0.31;
        this.circleImgHeight = deviceHeight * 0.17;
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
    TimelineComponent.prototype.askQuestion = function () {
        this.askQuestionBoolean = true;
    };
    TimelineComponent.prototype.send = function () {
        this.askQuestionBoolean = false;
    };
    TimelineComponent.prototype.changeEndorsed = function () {
        if (this.Endorse == 'Endorsed') {
            this.Endorse = 'Endorse';
        }
        else {
            this.Endorse = 'Endorsed';
        }
    };
    Object.defineProperty(TimelineComponent.prototype, "getIamge", {
        get: function () {
            if (this.Endorse == 'Endorsed') {
                return 'res://endorsed';
            }
            else {
                return 'res://endorse';
            }
        },
        enumerable: true,
        configurable: true
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFEQUFtRDtBQUNuRCwyREFBeUQ7QUFDekQsa0dBQStGO0FBQy9GLHNEQUFxRDtBQUNyRCxzREFBK0Q7QUFDL0QsMERBQTREO0FBUTVEO0lBWUUsMkJBQW9CLEtBQVcsRUFBUyxNQUF3QjtRQUE1QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFGaEUsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFnQnBCLFlBQU8sR0FBRztZQUNSLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtZQUNmLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUNqQixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTtTQUNoQyxDQUFDO1FBRUYsZUFBVSxHQUFHO1lBQ1gsRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBRTtZQUMzQixFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO1lBQzdCLEVBQUUsU0FBUyxFQUFFLHlEQUEwQixFQUFFO1NBQzFDLENBQUM7UUE2QkssV0FBTSxHQUFHLEVBQUUsQ0FBQztJQXREaUQsQ0FBQztJQUVyRSxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksWUFBWSxHQUFXLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUFBLENBQUM7UUFDdkUsSUFBSSxXQUFXLEdBQVcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXRDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUM7SUFFN0MsQ0FBQztJQWVELDJDQUFlLEdBQWYsVUFBZ0IsS0FBSztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsNkNBQWlCLEdBQWpCLFVBQWtCLEtBQUs7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUdELHNDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLFFBQVE7YUFDaEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELGdDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFLRCwwQ0FBYyxHQUFkO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzVCLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQUksdUNBQVE7YUFBWjtZQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1lBQzFCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsZUFBZSxDQUFDO1lBQ3pCLENBQUM7UUFDSCxDQUFDOzs7T0FBQTtJQW5GVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBYTJCLFdBQUksRUFBaUIseUJBQWdCO09BWnJELGlCQUFpQixDQW9GN0I7SUFBRCx3QkFBQztDQUFBLEFBcEZELElBb0ZDO0FBcEZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCaW9Db21wb25lbnQgfSBmcm9tICcuL2Jpby9iaW8uY29tcG9uZW50JztcbmltcG9ydCB7IFBvc3RzQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0cy9wb3N0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW5kb3JzZWRDYW5kaWRhdGVDb21wb25lbnQgfSBmcm9tICcuL2VuZG9yc2VkLWNhbmRpZGF0ZS9lbmRvcnNlZC1jYW5kaWRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy10aW1lbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpbWVsaW5lLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgc2VhcmNoQmFyaGVpZ2h0OiBudW1iZXI7XG4gIHNlbGVjdGVkSW5kZXg7XG5cbiAgaWNvbldpZGh0O1xuICBpY29uSGVpZ2h0O1xuICBjaXJjbGVJbWdIZWlnaHQ7XG4gIGNpcmNsZUltZ1dpZHRoO1xuXG4gIGFza1F1ZXN0aW9uQm9vbGVhbiA9IGZhbHNlO1xuICBFbmRvcnNlID0gXCJFbmRvcnNlXCI7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UscHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICBsZXQgZGV2aWNlSGVpZ2h0OiBudW1iZXIgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzOztcbiAgICAgbGV0IGRldmljZVdpZHRoOiBudW1iZXIgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XG4gICAgdGhpcy5zZWFyY2hCYXJoZWlnaHQgPSBkZXZpY2VIZWlnaHQgKiAwLjA4NTtcbiAgICB0aGlzLmljb25XaWRodCA9IGRldmljZVdpZHRoICogMC4xO1xuICAgIHRoaXMuaWNvbkhlaWdodCA9IGRldmljZUhlaWdodCAqIDAuMDc7XG5cbiAgICB0aGlzLmNpcmNsZUltZ1dpZHRoID0gZGV2aWNlV2lkdGggKiAwLjMxO1xuICAgIHRoaXMuY2lyY2xlSW1nSGVpZ2h0ID0gZGV2aWNlSGVpZ2h0ICogMC4xNztcbiAgICBcbiAgfVxuXG4gIGZpbHRlcnMgPSBbXG4gICAgeyBuYW1lOiBcIkJpb1wiIH0sXG4gICAgeyBuYW1lOiBcIlBvc3RzXCIgfSxcbiAgICB7IG5hbWU6IFwiRW5kb3JzZWQgY2FuZGlkYXRlc1wiIH1cbiAgXTtcblxuICBjb21wb25lbnRzID0gW1xuICAgIHsgY29tcG9uZW50OiBCaW9Db21wb25lbnQgfSxcbiAgICB7IGNvbXBvbmVudDogUG9zdHNDb21wb25lbnQgfSxcbiAgICB7IGNvbXBvbmVudDogRW5kb3JzZWRDYW5kaWRhdGVDb21wb25lbnQgfSxcbiAgXTtcblxuXG4gIHRhYkluZGV4Q2hhbmdlZChpbmRleCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB9XG5cbiAgcGFnZXJJbmRleENoYW5nZWQoaW5kZXgpIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgfVxuXG5cbiAgbmF2aWdhdGVUbyhwYXRoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3BhdGhdLCB7XG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdmYWRlJyxcbiAgICAgICAgY3VydmU6ICdsaW5lYXInXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc2tRdWVzdGlvbigpIHtcbiAgICB0aGlzLmFza1F1ZXN0aW9uQm9vbGVhbiA9IHRydWU7XG4gIH1cbiAgXG4gIHNlbmQoKSB7XG4gICAgdGhpcy5hc2tRdWVzdGlvbkJvb2xlYW4gPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0dnRleHQgPSBcIlwiO1xuXG5cbiAgY2hhbmdlRW5kb3JzZWQoKSB7XG4gICAgICBpZiAodGhpcy5FbmRvcnNlID09ICdFbmRvcnNlZCcpIHtcbiAgICAgICAgdGhpcy5FbmRvcnNlID0gJ0VuZG9yc2UnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5FbmRvcnNlID0gJ0VuZG9yc2VkJztcbiAgICAgIH1cbiAgfVxuXG4gIGdldCBnZXRJYW1nZSgpIHtcbiAgICBpZiAodGhpcy5FbmRvcnNlID09ICdFbmRvcnNlZCcpIHtcbiAgICAgIHJldHVybiAncmVzOi8vZW5kb3JzZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3JlczovL2VuZG9yc2UnO1xuICAgIH1cbiAgfVxufVxuIl19