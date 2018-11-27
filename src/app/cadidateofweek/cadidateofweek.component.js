"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var platformModule = require("tns-core-modules/platform");
var router_1 = require("nativescript-angular/router");
var page_service_1 = require("../page.service");
var CadidateofweekComponent = /** @class */ (function () {
    function CadidateofweekComponent(_page, routerExtensions, userService) {
        this._page = _page;
        this.routerExtensions = routerExtensions;
        this.userService = userService;
    }
    CadidateofweekComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        var deviceHeight = platformModule.screen.mainScreen.heightDIPs;
        this.imgHeight = deviceHeight * 0.23;
        this.userService.onchangeIndex(false);
    };
    CadidateofweekComponent.prototype.close = function () {
        this.routerExtensions.back();
        this.userService.onchangeIndex(true);
    };
    CadidateofweekComponent = __decorate([
        core_1.Component({
            selector: 'ns-cadidateofweek',
            templateUrl: './cadidateofweek.component.html',
            styleUrls: ['./cadidateofweek.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions, page_service_1.PageService])
    ], CadidateofweekComponent);
    return CadidateofweekComponent;
}());
exports.CadidateofweekComponent = CadidateofweekComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkaWRhdGVvZndlZWsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FkaWRhdGVvZndlZWsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFxRDtBQUNyRCwwREFBNEQ7QUFDNUQsc0RBQStEO0FBQy9ELGdEQUE4QztBQVE5QztJQUdFLGlDQUFvQixLQUFXLEVBQVUsZ0JBQWtDLEVBQVMsV0FBd0I7UUFBeEYsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakgsMENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLFlBQVksR0FBVyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFHRCx1Q0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFoQlUsdUJBQXVCO1FBTm5DLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7WUFDN0MsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBSTJCLFdBQUksRUFBNEIseUJBQWdCLEVBQXNCLDBCQUFXO09BSGpHLHVCQUF1QixDQWlCbkM7SUFBRCw4QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vcGFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtY2FkaWRhdGVvZndlZWsnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FkaWRhdGVvZndlZWsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYWRpZGF0ZW9md2Vlay5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQ2FkaWRhdGVvZndlZWtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGltZ0hlaWdodDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgdXNlclNlcnZpY2U6IFBhZ2VTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgbGV0IGRldmljZUhlaWdodDogbnVtYmVyID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcztcbiAgICB0aGlzLmltZ0hlaWdodCA9IGRldmljZUhlaWdodCAqIDAuMjM7XG4gICAgdGhpcy51c2VyU2VydmljZS5vbmNoYW5nZUluZGV4KGZhbHNlKTtcbiAgfSAgICBcbiAgXG4gIFxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIHRoaXMudXNlclNlcnZpY2Uub25jaGFuZ2VJbmRleCh0cnVlKTtcbiAgfVxufVxuIl19