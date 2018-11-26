"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var platformModule = require("tns-core-modules/platform");
var router_1 = require("nativescript-angular/router");
var CadidateofweekComponent = /** @class */ (function () {
    function CadidateofweekComponent(_page, routerExtensions) {
        this._page = _page;
        this.routerExtensions = routerExtensions;
    }
    CadidateofweekComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        var deviceHeight = platformModule.screen.mainScreen.heightDIPs;
        this.imgHeight = deviceHeight * 0.23;
    };
    CadidateofweekComponent.prototype.close = function () {
        this.routerExtensions.back();
    };
    CadidateofweekComponent = __decorate([
        core_1.Component({
            selector: 'ns-cadidateofweek',
            templateUrl: './cadidateofweek.component.html',
            styleUrls: ['./cadidateofweek.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], CadidateofweekComponent);
    return CadidateofweekComponent;
}());
exports.CadidateofweekComponent = CadidateofweekComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkaWRhdGVvZndlZWsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FkaWRhdGVvZndlZWsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFxRDtBQUNyRCwwREFBNEQ7QUFDNUQsc0RBQStEO0FBUS9EO0lBR0UsaUNBQW9CLEtBQVcsRUFBVSxnQkFBa0M7UUFBdkQsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRWhGLDBDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxZQUFZLEdBQVcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRUQsdUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBYlUsdUJBQXVCO1FBTm5DLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7WUFDN0MsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBSTJCLFdBQUksRUFBNEIseUJBQWdCO09BSGhFLHVCQUF1QixDQWNuQztJQUFELDhCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jYWRpZGF0ZW9md2VlaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWRpZGF0ZW9md2Vlay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhZGlkYXRlb2Z3ZWVrLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBDYWRpZGF0ZW9md2Vla0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaW1nSGVpZ2h0O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICBsZXQgZGV2aWNlSGVpZ2h0OiBudW1iZXIgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzO1xuICAgIHRoaXMuaW1nSGVpZ2h0ID0gZGV2aWNlSGVpZ2h0ICogMC4yMztcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gIH1cbn1cbiJdfQ==