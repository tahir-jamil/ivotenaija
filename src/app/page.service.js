"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/internal/Subject");
var PageService = /** @class */ (function () {
    function PageService() {
        this.showActionBar = new Subject_1.Subject();
        this.currentLeadUpdated$ = this.showActionBar.asObservable();
    }
    PageService.prototype.onchangeIndex = function (data) {
        this.showActionBar.next(data);
    };
    PageService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PageService);
    return PageService;
}());
exports.PageService = PageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGlEQUFnRDtBQU1oRDtJQVdFO1FBVFEsa0JBQWEsR0FBRyxJQUFJLGlCQUFPLEVBQU8sQ0FBQztRQUUzQyx3QkFBbUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBT3hDLENBQUM7SUFKakIsbUNBQWEsR0FBYixVQUFjLElBQUk7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQVRVLFdBQVc7UUFKdkIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BRVcsV0FBVyxDQWF2QjtJQUFELGtCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9pbnRlcm5hbC9TdWJqZWN0JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQYWdlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzaG93QWN0aW9uQmFyID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBcbiAgY3VycmVudExlYWRVcGRhdGVkJCA9IHRoaXMuc2hvd0FjdGlvbkJhci5hc09ic2VydmFibGUoKTtcblxuXG4gIG9uY2hhbmdlSW5kZXgoZGF0YSkge1xuICAgIHRoaXMuc2hvd0FjdGlvbkJhci5uZXh0KGRhdGEpO1xuICB9XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59Il19