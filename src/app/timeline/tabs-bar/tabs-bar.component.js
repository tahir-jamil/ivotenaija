"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabsBarComponent = /** @class */ (function () {
    function TabsBarComponent() {
        this.filters = [];
        this.indexChange = new core_1.EventEmitter;
        this.selectedIndex = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFicy1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBUS9FO0lBWUU7UUFWUyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBRVosZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLENBQUM7UUFNekMsa0JBQWEsR0FBRyxDQUFDLENBQUM7SUFFRixDQUFDO0lBRWpCLG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBR0QsMENBQWUsR0FBZixVQUFnQixRQUFRO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxzQkFBSSw0Q0FBYzthQUFsQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBekJRO1FBQVIsWUFBSyxFQUFFOztxREFBYztJQUVaO1FBQVQsYUFBTSxFQUFFOzt5REFBZ0M7SUFKOUIsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDOztPQUNXLGdCQUFnQixDQTZCNUI7SUFBRCx1QkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHUtdGFicy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFicy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJzLWJhci5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgVGFic0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZmlsdGVycyA9IFtdO1xuXG4gIEBPdXRwdXQoKSBpbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI7XG4gIFxuICBpbWd3aWR0aDtcbiAgaW1nSGVpZ2h0O1xuICB0YWJQYWRkaW5nO1xuXG4gIHNlbGVjdGVkSW5kZXggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuXG4gIHRhYkluZGV4Q2hhbmdlZChuZXdJbmRleCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IG5ld0luZGV4O1xuICAgIGNvbnNvbGUubG9nKG5ld0luZGV4KTtcbiAgICBcbiAgICB0aGlzLmluZGV4Q2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgfVxuXG4gIGdldCBhY3RpdmVUYWJJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4O1xuICB9XG5cbn1cbiJdfQ==