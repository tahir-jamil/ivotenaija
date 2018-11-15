"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.components = [];
        this.disableSwipe = false;
        this.row = "0";
        this.pagerIndexChanged = new core_1.EventEmitter;
        this.isItemVisible = false;
        this.currentPagerIndex = 0;
        this.latestReceivedIndex = 0;
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.onLoaded = function () {
        this.isItemVisible = true;
    };
    TabsComponent.prototype.loadedImage = function ($event) {
    };
    TabsComponent.prototype.onIndexChanged = function ($event) {
        debugObj($event);
        this.latestReceivedIndex = $event.value;
        this.selectedIndex = $event.value;
        this.pagerIndexChanged.emit(this.selectedIndex);
    };
    TabsComponent.prototype.pageChanged = function (index) {
        debugObj(index);
    };
    __decorate([
        core_1.ViewChild("pager"),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "pager", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "components", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "disableSwipe", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "selectedIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "row", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "pagerIndexChanged", void 0);
    __decorate([
        core_1.ViewChild('scroll'),
        __metadata("design:type", core_1.ElementRef)
    ], TabsComponent.prototype, "scroll", void 0);
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'tu-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
function debugObj(obj) {
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRztBQVN0RztJQWFFO1FBVFMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVyQixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ1Qsc0JBQWlCLEdBQUcsSUFBSSxtQkFBWSxDQUFDO1FBRS9DLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBY3RCLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0Qix3QkFBbUIsR0FBRyxDQUFDLENBQUM7SUFWeEIsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFVRCxtQ0FBVyxHQUFYLFVBQVksTUFBTTtJQUNsQixDQUFDO0lBS0Qsc0NBQWMsR0FBZCxVQUFlLE1BQU07UUFDbkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLEtBQWE7UUFDdkIsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUE3Q21CO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDOztnREFBWTtJQUV0QjtRQUFSLFlBQUssRUFBRTs7cURBQWlCO0lBQ2hCO1FBQVIsWUFBSyxFQUFFOzt1REFBc0I7SUFDckI7UUFBUixZQUFLLEVBQUU7O3dEQUFlO0lBQ2Q7UUFBUixZQUFLLEVBQUU7OzhDQUFXO0lBQ1Q7UUFBVCxhQUFNLEVBQUU7OzREQUFzQztJQTJCMUI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7aURBQUM7SUFuQzdCLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7O09BQ1csYUFBYSxDQWdEekI7SUFBRCxvQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLHNDQUFhO0FBa0QxQixrQkFBa0IsR0FBUTtJQUN4QixHQUFHLENBQUMsQ0FBYyxVQUFnQixFQUFoQixLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQWhCLGNBQWdCLEVBQWhCLElBQWdCO1FBQTdCLElBQU0sR0FBRyxTQUFBO0tBQ2I7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHUtdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFicy5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZChcInBhZ2VyXCIpIHBhZ2VyOiBhbnk7XG4gIFxuICBASW5wdXQoKSBjb21wb25lbnRzID0gW107XG4gIEBJbnB1dCgpIGRpc2FibGVTd2lwZSA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4O1xuICBASW5wdXQoKSByb3cgPSBcIjBcIjtcbiAgQE91dHB1dCgpIHBhZ2VySW5kZXhDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjtcblxuICBpc0l0ZW1WaXNpYmxlID0gZmFsc2U7XG4gIHByaW1hcnlCYWNrZ3JvdW5kO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuICBcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cbiAgXG4gIG9uTG9hZGVkKCkge1xuICAgIHRoaXMuaXNJdGVtVmlzaWJsZSA9IHRydWU7XG4gIH1cbiAgXG4gIGN1cnJlbnRQYWdlckluZGV4ID0gMDtcbiAgbGF0ZXN0UmVjZWl2ZWRJbmRleCA9IDA7XG4gIFxuICBpdGVtczogYW55O1xuXG4gIFxuXG5cbiAgbG9hZGVkSW1hZ2UoJGV2ZW50KSB7XG4gIH1cblxuICBAVmlld0NoaWxkKCdzY3JvbGwnKSBzY3JvbGw6IEVsZW1lbnRSZWY7XG5cblxuICBvbkluZGV4Q2hhbmdlZCgkZXZlbnQpIHtcbiAgICBkZWJ1Z09iaigkZXZlbnQpO1xuICAgIHRoaXMubGF0ZXN0UmVjZWl2ZWRJbmRleCA9ICRldmVudC52YWx1ZTtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAkZXZlbnQudmFsdWU7XG4gICAgdGhpcy5wYWdlckluZGV4Q2hhbmdlZC5lbWl0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gIH1cblxuICBwYWdlQ2hhbmdlZChpbmRleDogbnVtYmVyKSB7XG4gICAgZGVidWdPYmooaW5kZXgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYnVnT2JqKG9iajogYW55KSB7XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iaikpIHtcbiAgfVxufVxuIl19