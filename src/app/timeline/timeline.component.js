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
    TimelineComponent.prototype.askQuestion = function () {
        this.askQuestionBoolean = true;
    };
    TimelineComponent.prototype.send = function () {
        this.askQuestionBoolean = false;
    };
    TimelineComponent.prototype.changeEndorsed = function () {
        this.Endorse = "Endorsed";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFEQUFtRDtBQUNuRCwyREFBeUQ7QUFDekQsa0dBQStGO0FBQy9GLHNEQUFxRDtBQUNyRCxzREFBK0Q7QUFDL0QsMERBQTREO0FBUTVEO0lBT0UsMkJBQW9CLEtBQVcsRUFBUyxNQUF3QjtRQUE1QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFGaEUsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFTcEIsWUFBTyxHQUFHO1lBQ1IsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO1lBQ2YsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQ2pCLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1NBQ2hDLENBQUM7UUFFRixlQUFVLEdBQUc7WUFDWCxFQUFFLFNBQVMsRUFBRSw0QkFBWSxFQUFFO1lBQzNCLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7WUFDN0IsRUFBRSxTQUFTLEVBQUUseURBQTBCLEVBQUU7U0FDMUMsQ0FBQztRQTZCSyxXQUFNLEdBQUcsRUFBRSxDQUFDO0lBL0NpRCxDQUFDO0lBRXJFLG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxZQUFZLEdBQVcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QyxDQUFDO0lBZUQsMkNBQWUsR0FBZixVQUFnQixLQUFLO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2Q0FBaUIsR0FBakIsVUFBa0IsS0FBSztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBR0Qsc0NBQVUsR0FBVixVQUFXLElBQUk7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsUUFBUTthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0NBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUtELDBDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQTtJQUM3QixDQUFDO0lBM0RVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FRMkIsV0FBSSxFQUFpQix5QkFBZ0I7T0FQckQsaUJBQWlCLENBNkQ3QjtJQUFELHdCQUFDO0NBQUEsQUE3REQsSUE2REM7QUE3RFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJpb0NvbXBvbmVudCB9IGZyb20gJy4vYmlvL2Jpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9zdHNDb21wb25lbnQgfSBmcm9tICcuL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbmRvcnNlZENhbmRpZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vZW5kb3JzZWQtY2FuZGlkYXRlL2VuZG9yc2VkLWNhbmRpZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXRpbWVsaW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGltZWxpbmUuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBzZWFyY2hCYXJoZWlnaHQ6IG51bWJlcjtcbiAgc2VsZWN0ZWRJbmRleDtcblxuICBhc2tRdWVzdGlvbkJvb2xlYW4gPSBmYWxzZTtcbiAgRW5kb3JzZSA9IFwiRW5kb3JzZVwiO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgbGV0IGRldmljZUhlaWdodDogbnVtYmVyID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcztcbiAgICB0aGlzLnNlYXJjaEJhcmhlaWdodCA9IGRldmljZUhlaWdodCAqIDAuMDg1O1xuICB9XG5cbiAgZmlsdGVycyA9IFtcbiAgICB7IG5hbWU6IFwiQmlvXCIgfSxcbiAgICB7IG5hbWU6IFwiUG9zdHNcIiB9LFxuICAgIHsgbmFtZTogXCJFbmRvcnNlZCBjYW5kaWRhdGVzXCIgfVxuICBdO1xuXG4gIGNvbXBvbmVudHMgPSBbXG4gICAgeyBjb21wb25lbnQ6IEJpb0NvbXBvbmVudCB9LFxuICAgIHsgY29tcG9uZW50OiBQb3N0c0NvbXBvbmVudCB9LFxuICAgIHsgY29tcG9uZW50OiBFbmRvcnNlZENhbmRpZGF0ZUNvbXBvbmVudCB9LFxuICBdO1xuXG5cbiAgdGFiSW5kZXhDaGFuZ2VkKGluZGV4KSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBwYWdlckluZGV4Q2hhbmdlZChpbmRleCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB9XG5cblxuICBuYXZpZ2F0ZVRvKHBhdGgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcGF0aF0sIHtcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgbmFtZTogJ2ZhZGUnLFxuICAgICAgICBjdXJ2ZTogJ2xpbmVhcidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFza1F1ZXN0aW9uKCkge1xuICAgIHRoaXMuYXNrUXVlc3Rpb25Cb29sZWFuID0gdHJ1ZTtcbiAgfVxuICBcbiAgc2VuZCgpIHtcbiAgICB0aGlzLmFza1F1ZXN0aW9uQm9vbGVhbiA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHR2dGV4dCA9IFwiXCI7XG5cblxuICBjaGFuZ2VFbmRvcnNlZCgpIHtcbiAgICAgIHRoaXMuRW5kb3JzZSA9IFwiRW5kb3JzZWRcIlxuICB9XG5cbn1cbiJdfQ==