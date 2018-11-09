"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platformModule = require("tns-core-modules/platform");
var ModalPicker = require("nativescript-modal-datetimepicker");
var page_1 = require("tns-core-modules/ui/page/page");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(_page) {
        this._page = _page;
        this.day = "day";
        this.month = "Month";
        this.year = "Year";
        this.formOne = {
            gender: "Ed Sheeran",
            stateofOrgin: "Ed Sheeran",
        };
        this.formTwo = {
            stateOfreg: "Ed Sheeran",
            party: "Ed Sheeran",
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        var deviceHeight = platformModule.screen.mainScreen.heightDIPs;
        var deviceWidth = platformModule.screen.mainScreen.widthDIPs;
        this.appIconWidth = deviceWidth * .20;
        this.appIconHeight = deviceHeight * .11;
        this.textFieldWidth = deviceWidth * 0.90;
        this.btnHeight = deviceHeight * 0.070;
    };
    Object.defineProperty(SignupComponent.prototype, "Day", {
        get: function () {
            return this.day;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "Month", {
        get: function () {
            return this.month;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "Year", {
        get: function () {
            return this.year;
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.pickDate = function () {
        var _this = this;
        var picker = new ModalPicker.ModalDatetimepicker();
        picker.pickDate({
            title: 'Please enter your birthday',
            theme: 'dark',
            maxDate: new Date(),
            is24HourView: false
        }).then(function (result) {
            _this.birthday = result['year'] + '-' + result['month'] + '-' + result['day'];
            _this.day = result['day'];
            _this.month = result['month'];
            _this.year = result['year'];
        }).catch(function (error) {
            console.log('Error: ' + error);
        });
    };
    SignupComponent.prototype.toggleCheck = function () {
        this.FirstCheckBox.nativeElement.toggle();
    };
    SignupComponent.prototype.getCheckProp = function () {
        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
    };
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], SignupComponent.prototype, "FirstCheckBox", void 0);
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'ns-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsMERBQTREO0FBQzVELCtEQUFpRTtBQUNqRSxzREFBcUQ7QUFTckQ7SUFxQkUseUJBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBZC9CLFFBQUcsR0FBTyxLQUFLLENBQUM7UUFDaEIsVUFBSyxHQUFPLE9BQU8sQ0FBQztRQUNwQixTQUFJLEdBQU8sTUFBTSxDQUFDO1FBRWxCLFlBQU8sR0FBNkM7WUFDbEQsTUFBTSxFQUFFLFlBQVk7WUFDcEIsWUFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQztRQUVGLFlBQU8sR0FBMEM7WUFDL0MsVUFBVSxFQUFFLFlBQVk7WUFDeEIsS0FBSyxFQUFFLFlBQVk7U0FDcEIsQ0FBQztJQUVpQyxDQUFDO0lBR3BDLGtDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxZQUFZLEdBQVcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ3ZFLElBQUksV0FBVyxHQUFXLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNyRSxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUVELHNCQUFJLGdDQUFHO2FBQVA7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFLO2FBQVQ7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFJO2FBQVI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUtELGtDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQU0sTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDckQsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNkLEtBQUssRUFBRSw0QkFBNEI7WUFDbkMsS0FBSyxFQUFFLE1BQU07WUFDYixPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDbkIsWUFBWSxFQUFFLEtBQUs7U0FDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDYixLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0UsS0FBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlNLHFDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVNLHNDQUFZLEdBQW5CO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBUmlCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTswREFBQztJQW5FakMsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FzQjJCLFdBQUk7T0FyQnBCLGVBQWUsQ0E2RTNCO0lBQUQsc0JBQUM7Q0FBQSxBQTdFRCxJQTZFQztBQTdFWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuaW1wb3J0ICogYXMgTW9kYWxQaWNrZXIgZnJvbSAnbmF0aXZlc2NyaXB0LW1vZGFsLWRhdGV0aW1lcGlja2VyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtc2lnbnVwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ251cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZ251cC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBhcHBJY29uV2lkdGg7XG4gIGFwcEljb25IZWlnaHQ7XG4gIHRleHRGaWVsZFdpZHRoO1xuICBidG5IZWlnaHQ7XG5cbiAgZGF5OmFueSA9IFwiZGF5XCI7XG4gIG1vbnRoOmFueSA9IFwiTW9udGhcIjtcbiAgeWVhcjphbnkgPSBcIlllYXJcIjtcblxuICBmb3JtT25lOiB7IGdlbmRlcjogc3RyaW5nLCBzdGF0ZW9mT3JnaW46IHN0cmluZyB9ID0ge1xuICAgIGdlbmRlcjogXCJFZCBTaGVlcmFuXCIsXG4gICAgc3RhdGVvZk9yZ2luOiBcIkVkIFNoZWVyYW5cIixcbiAgfTtcblxuICBmb3JtVHdvOiB7IHN0YXRlT2ZyZWc6IHN0cmluZywgcGFydHk6IHN0cmluZyB9ID0ge1xuICAgIHN0YXRlT2ZyZWc6IFwiRWQgU2hlZXJhblwiLFxuICAgIHBhcnR5OiBcIkVkIFNoZWVyYW5cIixcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlKSB7IH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIFxuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICBsZXQgZGV2aWNlSGVpZ2h0OiBudW1iZXIgPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzO1xuICAgIGxldCBkZXZpY2VXaWR0aDogbnVtYmVyID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xuICAgIHRoaXMuYXBwSWNvbldpZHRoID0gZGV2aWNlV2lkdGggKiAuMjA7XG4gICAgdGhpcy5hcHBJY29uSGVpZ2h0ID0gZGV2aWNlSGVpZ2h0ICogLjExO1xuICAgIHRoaXMudGV4dEZpZWxkV2lkdGggPSBkZXZpY2VXaWR0aCAqIDAuOTA7XG4gICAgdGhpcy5idG5IZWlnaHQgPSBkZXZpY2VIZWlnaHQgKiAwLjA3MDtcbiAgfVxuXG4gIGdldCBEYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF5O1xuICB9XG5cbiAgZ2V0IE1vbnRoKCkge1xuICAgIHJldHVybiB0aGlzLm1vbnRoO1xuICB9XG5cbiAgZ2V0IFllYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMueWVhcjtcbiAgfVxuXG5cbiAgYmlydGhkYXk7XG5cbiAgcGlja0RhdGUoKSB7XG4gICAgY29uc3QgcGlja2VyID0gbmV3IE1vZGFsUGlja2VyLk1vZGFsRGF0ZXRpbWVwaWNrZXIoKTtcbiAgICBwaWNrZXIucGlja0RhdGUoe1xuICAgICAgdGl0bGU6ICdQbGVhc2UgZW50ZXIgeW91ciBiaXJ0aGRheScsXG4gICAgICB0aGVtZTogJ2RhcmsnLFxuICAgICAgbWF4RGF0ZTogbmV3IERhdGUoKSxcbiAgICAgIGlzMjRIb3VyVmlldzogZmFsc2VcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuYmlydGhkYXkgPSByZXN1bHRbJ3llYXInXSArICctJyArIHJlc3VsdFsnbW9udGgnXSArICctJyArIHJlc3VsdFsnZGF5J107XG4gICAgICB0aGlzLmRheSA9IHJlc3VsdFsnZGF5J107XG4gICAgICB0aGlzLm1vbnRoID0gcmVzdWx0Wydtb250aCddO1xuICAgICAgdGhpcy55ZWFyID0gcmVzdWx0Wyd5ZWFyJ107XG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBAVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIHRvZ2dsZUNoZWNrKCkge1xuICAgIHRoaXMuRmlyc3RDaGVja0JveC5uYXRpdmVFbGVtZW50LnRvZ2dsZSgpO1xuICB9XG5cbiAgcHVibGljIGdldENoZWNrUHJvcCgpIHtcbiAgICBjb25zb2xlLmxvZygnY2hlY2tlZCBwcm9wIHZhbHVlID0gJyArIHRoaXMuRmlyc3RDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQpO1xuICB9XG5cbn1cbiJdfQ==