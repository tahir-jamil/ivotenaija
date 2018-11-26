"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var FeedPageComponent = /** @class */ (function () {
    function FeedPageComponent(_page, routerExtensions) {
        this._page = _page;
        this.routerExtensions = routerExtensions;
        this.posts = ['a', 'b', 'c'];
    }
    FeedPageComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
    };
    FeedPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.secondTextFieldId.nativeElement.focus();
        }, 600);
    };
    FeedPageComponent.prototype.navtocadiofweek = function () {
        this.routerExtensions.navigate(['/candiofweek'], {
            transition: {
                name: 'slideTop',
                curve: 'linear'
            }
        });
    };
    __decorate([
        core_1.ViewChild("secondTextFieldId"),
        __metadata("design:type", core_1.ElementRef)
    ], FeedPageComponent.prototype, "secondTextFieldId", void 0);
    FeedPageComponent = __decorate([
        core_1.Component({
            selector: 'ns-feedPage',
            templateUrl: './feedPage.component.html',
            styleUrls: ['./feedPage.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], FeedPageComponent);
    return FeedPageComponent;
}());
exports.FeedPageComponent = FeedPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZFBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVlZFBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdGO0FBQ3hGLHNEQUFxRDtBQUNyRCxzREFBK0Q7QUFRL0Q7SUFLRSwyQkFBb0IsS0FBVyxFQUFTLGdCQUFrQztRQUF0RCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUYxRSxVQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXdELENBQUM7SUFFL0Usb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBR0QsMkNBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBSUQsMkNBQWUsR0FBZjtRQUNHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUM3QyxVQUFVLEVBQUU7Z0JBQ1osSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxRQUFRO2FBQ2Q7U0FDSixDQUFDLENBQUM7SUFDTixDQUFDO0lBekIrQjtRQUEvQixnQkFBUyxDQUFDLG1CQUFtQixDQUFDO2tDQUFvQixpQkFBVTtnRUFBQztJQUZuRCxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBTTJCLFdBQUksRUFBMkIseUJBQWdCO09BTC9ELGlCQUFpQixDQTRCN0I7SUFBRCx3QkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZmVlZFBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVlZFBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mZWVkUGFnZS5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgRmVlZFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBcbiAgQFZpZXdDaGlsZChcInNlY29uZFRleHRGaWVsZElkXCIpIHNlY29uZFRleHRGaWVsZElkOiBFbGVtZW50UmVmO1xuICBwb3N0cyA9IFsnYScsJ2InLCdjJ107XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZWNvbmRUZXh0RmllbGRJZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSwgNjAwKTtcbiAgfVxuXG5cbiAgXG4gIG5hdnRvY2FkaW9md2VlaygpIHtcbiAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2NhbmRpb2Z3ZWVrJ10sIHtcbiAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgIG5hbWU6ICdzbGlkZVRvcCcsXG4gICAgICAgICBjdXJ2ZTogJ2xpbmVhcidcbiAgICAgICAgIH1cbiAgICAgfSk7XG4gIH1cbn1cbiJdfQ==