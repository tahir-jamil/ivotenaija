"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabPageComponent = /** @class */ (function () {
    function TabPageComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    TabPageComponent.prototype.ngOnInit = function () {
        var factory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        var componentRef = this.container.createComponent(factory);
        componentRef.instance.selectedIndex = this.selectedIndex;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabPageComponent.prototype, "component", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TabPageComponent.prototype, "selectedIndex", void 0);
    __decorate([
        core_1.ViewChild("container", { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], TabPageComponent.prototype, "container", void 0);
    TabPageComponent = __decorate([
        core_1.Component({
            selector: 'tu-tab-page',
            templateUrl: './tab-page.component.html',
            styleUrls: ['./tab-page.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], TabPageComponent);
    return TabPageComponent;
}());
exports.TabPageComponent = TabPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFiLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdIO0FBUWhIO0lBS0UsMEJBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQUksQ0FBQztJQUUzRSxtQ0FBUSxHQUFSO1FBRUUsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUVqRixJQUFJLFlBQVksR0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoRSxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQy9ELENBQUM7SUFiUTtRQUFSLFlBQUssRUFBRTs7dURBQVc7SUFDVjtRQUFSLFlBQUssRUFBRTs7MkRBQWU7SUFDNkI7UUFBbkQsZ0JBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWdCLEVBQUUsQ0FBQztrQ0FBWSx1QkFBZ0I7dURBQUM7SUFIckUsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQU04QywrQkFBd0I7T0FMM0QsZ0JBQWdCLENBZTVCO0lBQUQsdUJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R1LXRhYi1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLXBhZ2UuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIFRhYlBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb21wb25lbnQ7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXg7XG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbXBvbmVudClcbiAgXG4gICAgICAgIGxldCBjb21wb25lbnRSZWY6IGFueSA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2Uuc2VsZWN0ZWRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgfVxufVxuIl19