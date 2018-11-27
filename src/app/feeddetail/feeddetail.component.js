"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var page_service_1 = require("../page.service");
var FeeddetailComponent = /** @class */ (function () {
    function FeeddetailComponent(_page, routerExtensions, userPage) {
        this._page = _page;
        this.routerExtensions = routerExtensions;
        this.userPage = userPage;
    }
    FeeddetailComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
    };
    FeeddetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    FeeddetailComponent = __decorate([
        core_1.Component({
            selector: 'ns-feeddetail',
            templateUrl: './feeddetail.component.html',
            styleUrls: ['./feeddetail.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions, page_service_1.PageService])
    ], FeeddetailComponent);
    return FeeddetailComponent;
}());
exports.FeeddetailComponent = FeeddetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmZWVkZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBcUQ7QUFDckQsc0RBQStEO0FBQy9ELGdEQUE4QztBQVE5QztJQUVFLDZCQUFvQixLQUFXLEVBQVUsZ0JBQWtDLEVBQVUsUUFBcUI7UUFBdEYsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFhO0lBQUksQ0FBQztJQUUvRyxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFWVSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDekMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBRzJCLFdBQUksRUFBNEIseUJBQWdCLEVBQW9CLDBCQUFXO09BRi9GLG1CQUFtQixDQVcvQjtJQUFELDBCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vcGFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZmVlZGRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWVkZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVlZGRldGFpbC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgRmVlZGRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHVzZXJQYWdlOiBQYWdlU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgZ29CYWNrKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gIH1cbn1cbiJdfQ==