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
        this.imgWidth = deviceWidth * 0.22;
        this.imgHeight = deviceHeight * 0.13;
        this.boxWidth = deviceWidth * 0.29;
        this.boxHeight = deviceHeight * 0.14;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kb3JzZWQtY2FuZGlkYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuZG9yc2VkLWNhbmRpZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMERBQTREO0FBUTVEO0lBT0U7UUFFQSxVQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFGdEMsQ0FBQztJQUlqQiw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxZQUFZLEdBQVcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ3ZFLElBQUksV0FBVyxHQUFXLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXJDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQW5CVSwwQkFBMEI7UUFOdEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztZQUNqRCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzs7T0FDVywwQkFBMEIsQ0FxQnRDO0lBQUQsaUNBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWVuZG9yc2VkLWNhbmRpZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbmRvcnNlZC1jYW5kaWRhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lbmRvcnNlZC1jYW5kaWRhdGUuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEVuZG9yc2VkQ2FuZGlkYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIGltZ1dpZHRoO1xuICBpbWdIZWlnaHQ7XG4gIGJveFdpZHRoO1xuICBib3hIZWlnaHQ7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgXG4gIHBvc3RzID0gWydhJywnYicsJ2MnLCdiJywnYycsJ2InLCdjJywnYicsJ2MnLCdiJywnYyddO1xuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGRldmljZUhlaWdodDogbnVtYmVyID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcztcbiAgICBsZXQgZGV2aWNlV2lkdGg6IG51bWJlciA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcbiAgICB0aGlzLmltZ1dpZHRoID0gZGV2aWNlV2lkdGggKiAwLjIyO1xuICAgIHRoaXMuaW1nSGVpZ2h0ID0gZGV2aWNlSGVpZ2h0ICogMC4xMztcblxuICAgIHRoaXMuYm94V2lkdGggPSBkZXZpY2VXaWR0aCAqIDAuMjk7XG4gICAgdGhpcy5ib3hIZWlnaHQgPSBkZXZpY2VIZWlnaHQgKiAwLjE0O1xuICB9XG5cbn1cbiJdfQ==