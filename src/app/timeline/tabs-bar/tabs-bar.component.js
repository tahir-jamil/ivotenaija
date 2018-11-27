"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabsBarComponent = /** @class */ (function () {
    function TabsBarComponent() {
        this.filters = [];
        this.selectedIndex = 0;
        this.indexChange = new core_1.EventEmitter;
    }
    TabsBarComponent.prototype.ngOnInit = function () {
    };
    TabsBarComponent.prototype.tabIndexChanged = function (newIndex) {
        this.selectedIndex = newIndex;
        console.log(newIndex);
        this.indexChange.emit(this.selectedIndex);
    };
    Object.defineProperty(TabsBarComponent.prototype, "activeTabIndex", {
        get: function () {
            return this.selectedIndex;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabsBarComponent.prototype, "filters", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabsBarComponent.prototype, "selectedIndex", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TabsBarComponent.prototype, "indexChange", void 0);
    TabsBarComponent = __decorate([
        core_1.Component({
            selector: 'tu-tabs-bar',
            templateUrl: './tabs-bar.component.html',
            styleUrls: ['./tabs-bar.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [])
    ], TabsBarComponent);
    return TabsBarComponent;
}());
exports.TabsBarComponent = TabsBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFicy1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBUS9FO0lBV0U7UUFUUyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2Isa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFFakIsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLENBQUM7SUFNekIsQ0FBQztJQUVqQixtQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUdELDBDQUFlLEdBQWYsVUFBZ0IsUUFBUTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsc0JBQUksNENBQWM7YUFBbEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQXZCUTtRQUFSLFlBQUssRUFBRTs7cURBQWM7SUFDYjtRQUFSLFlBQUssRUFBRTs7MkRBQW1CO0lBRWpCO1FBQVQsYUFBTSxFQUFFOzt5REFBZ0M7SUFMOUIsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDOztPQUNXLGdCQUFnQixDQTJCNUI7SUFBRCx1QkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHUtdGFicy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFicy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJzLWJhci5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgVGFic0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZmlsdGVycyA9IFtdO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4ID0gMDtcblxuICBAT3V0cHV0KCkgaW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyO1xuICBcbiAgaW1nd2lkdGg7XG4gIGltZ0hlaWdodDtcbiAgdGFiUGFkZGluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgXG4gIHRhYkluZGV4Q2hhbmdlZChuZXdJbmRleCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IG5ld0luZGV4O1xuICAgIGNvbnNvbGUubG9nKG5ld0luZGV4KTtcbiAgICB0aGlzLmluZGV4Q2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgfVxuXG4gIGdldCBhY3RpdmVUYWJJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4O1xuICB9XG5cbn1cbiJdfQ==