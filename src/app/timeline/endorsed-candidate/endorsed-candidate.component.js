"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platformModule = require("tns-core-modules/platform");
var EndorsedCandidateComponent = /** @class */ (function () {
    function EndorsedCandidateComponent() {
        this.posts = ['a', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c'];
    }
    EndorsedCandidateComponent.prototype.ngOnInit = function () {
        var deviceHeight = platformModule.screen.mainScreen.heightDIPs;
        var deviceWidth = platformModule.screen.mainScreen.widthDIPs;
        this.imgWidth = deviceWidth * 0.26;
        this.imgHeight = deviceHeight * 0.14;
    };
    EndorsedCandidateComponent = __decorate([
        core_1.Component({
            selector: 'ns-endorsed-candidate',
            templateUrl: './endorsed-candidate.component.html',
            styleUrls: ['./endorsed-candidate.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [])
    ], EndorsedCandidateComponent);
    return EndorsedCandidateComponent;
}());
exports.EndorsedCandidateComponent = EndorsedCandidateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kb3JzZWQtY2FuZGlkYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuZG9yc2VkLWNhbmRpZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMERBQTREO0FBUTVEO0lBSUU7UUFDQSxVQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFEdEMsQ0FBQztJQUVqQiw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxZQUFZLEdBQVcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ3ZFLElBQUksV0FBVyxHQUFXLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFYVSwwQkFBMEI7UUFOdEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztZQUNqRCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzs7T0FDVywwQkFBMEIsQ0FhdEM7SUFBRCxpQ0FBQztDQUFBLEFBYkQsSUFhQztBQWJZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZW5kb3JzZWQtY2FuZGlkYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VuZG9yc2VkLWNhbmRpZGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VuZG9yc2VkLWNhbmRpZGF0ZS5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgRW5kb3JzZWRDYW5kaWRhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgaW1nV2lkdGg7XG4gIGltZ0hlaWdodDtcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgcG9zdHMgPSBbJ2EnLCdiJywnYycsJ2InLCdjJywnYicsJ2MnLCdiJywnYycsJ2InLCdjJ107XG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBkZXZpY2VIZWlnaHQ6IG51bWJlciA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHM7XG4gICAgbGV0IGRldmljZVdpZHRoOiBudW1iZXIgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XG4gICAgdGhpcy5pbWdXaWR0aCA9IGRldmljZVdpZHRoICogMC4yNjtcbiAgICB0aGlzLmltZ0hlaWdodCA9IGRldmljZUhlaWdodCAqIDAuMTQ7XG4gIH1cblxufVxuIl19