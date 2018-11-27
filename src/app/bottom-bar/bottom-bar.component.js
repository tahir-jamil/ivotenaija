"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var platformModule = require("tns-core-modules/platform");
var router_2 = require("@angular/router");
var page_service_1 = require("../page.service");
var BottomBarComponent = /** @class */ (function () {
    function BottomBarComponent(routerExtensions, router, userService) {
        this.routerExtensions = routerExtensions;
        this.router = router;
        this.userService = userService;
        this.visible = true;
        this.bottomBarHeight = "";
        this.imgHeight = "";
        this.imgWidth = "";
        this.activeIndex = 0;
        this.opactiy = true;
    }
    BottomBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var deviceHeight = platformModule.screen.mainScreen.heightDIPs;
        var deviceWidth = platformModule.screen.mainScreen.widthDIPs;
        this.bottomBarHeight = deviceHeight * 0.1;
        this.imgHeight = deviceHeight * 0.04;
        this.imgWidth = deviceHeight * 0.04;
        // let data = this.userService.currentLeadUpdated$.subscribe((data) => {
        // console.log(data);
        // this.onChangeIndex(data);
        // })
        this.userService.currentLeadUpdated$.subscribe(function (data) {
            console.log('sdfsd' + data);
            if (data == false) {
                _this.opactiy = false;
            }
            else {
                _this.opactiy = true;
            }
        });
    };
    BottomBarComponent.prototype.onChangeIndex = function (args) {
        this.activeIndex = args;
        this.visible = true;
        switch (this.activeIndex) {
            case 0:
                {
                    this.routerExtensions.navigate(["/feed"], {
                        transition: {
                            name: "fade",
                            curve: "linear"
                        }
                    });
                }
                break;
            case 1:
                {
                    this.routerExtensions.navigate(["/italk"], {
                        transition: {
                            name: "fade",
                            curve: "linear"
                        }
                    });
                }
                break;
            case 2:
                {
                    this.routerExtensions.navigate(["/timeline"], {
                        transition: {
                            name: "fade",
                            curve: "linear"
                        }
                    });
                }
                break;
            case 3: {
                this.routerExtensions.navigate(["/more"], {
                    transition: {
                        name: "fade",
                        curve: "linear"
                    }
                });
                // let navigationExtras: NavigationExtras = {
                //   queryParams: {
                //     "title": "Web",
                //     "url": "https://seefarma.it/chat/"
                //   }
                // };
                // this.router.navigate(["webview"], navigationExtras);
                // utils.openUrl("https://seefarma.it/chat/")
                break;
            }
            default:
                break;
        }
    };
    Object.defineProperty(BottomBarComponent.prototype, "activeIndexValue", {
        get: function () {
            return this.activeIndex;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BottomBarComponent.prototype, "visible", void 0);
    BottomBarComponent = __decorate([
        core_1.Component({
            selector: "ns-bottom-bar",
            templateUrl: "./bottom-bar.component.html",
            styleUrls: ["./bottom-bar.component.css"],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, router_2.Router, page_service_1.PageService])
    ], BottomBarComponent);
    return BottomBarComponent;
}());
exports.BottomBarComponent = BottomBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3R0b20tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsMERBQTREO0FBRTVELDBDQUEyRDtBQUMzRCxnREFBOEM7QUFTOUM7SUFVRSw0QkFBb0IsZ0JBQWtDLEVBQVUsTUFBYyxFQUFVLFdBQXdCO1FBQTVGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFSdkcsWUFBTyxHQUFHLElBQUksQ0FBQztRQUV4QixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQUMxQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsWUFBTyxHQUFHLElBQUksQ0FBQztJQUVxRyxDQUFDO0lBRXJILHFDQUFRLEdBQVI7UUFBQSxpQkFvQkM7UUFuQkMsSUFBTSxZQUFZLEdBQVcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ3pFLElBQU0sV0FBVyxHQUFXLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUN2RSxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQztRQUVwQyx3RUFBd0U7UUFDdEUscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUM5QixLQUFLO1FBRUosSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDdEIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELDBDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEtBQUssQ0FBQztnQkFBRSxDQUFDO29CQUNQLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTt3QkFDeEMsVUFBVSxFQUFFOzRCQUNWLElBQUksRUFBRSxNQUFNOzRCQUNaLEtBQUssRUFBRSxRQUFRO3lCQUNoQjtxQkFDRixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDQyxLQUFLLENBQUM7WUFDUixLQUFLLENBQUM7Z0JBQUUsQ0FBQztvQkFDUCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQ3pDLFVBQVUsRUFBRTs0QkFDVixJQUFJLEVBQUUsTUFBTTs0QkFDWixLQUFLLEVBQUUsUUFBUTt5QkFDaEI7cUJBQ0YsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0MsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDO2dCQUFFLENBQUM7b0JBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFO3dCQUM1QyxVQUFVLEVBQUU7NEJBQ1YsSUFBSSxFQUFFLE1BQU07NEJBQ1osS0FBSyxFQUFFLFFBQVE7eUJBQ2hCO3FCQUNGLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUNDLEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN4QyxVQUFVLEVBQUU7d0JBQ1YsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFFBQVE7cUJBQ2hCO2lCQUNGLENBQUMsQ0FBQztnQkFFSCw2Q0FBNkM7Z0JBQzdDLG1CQUFtQjtnQkFDbkIsc0JBQXNCO2dCQUN0Qix5Q0FBeUM7Z0JBQ3pDLE1BQU07Z0JBQ04sS0FBSztnQkFFTCx1REFBdUQ7Z0JBQ3ZELDZDQUE2QztnQkFDN0MsS0FBSyxDQUFDO1lBQ1IsQ0FBQztZQUNEO2dCQUNFLEtBQUssQ0FBQztRQUNWLENBQUM7SUFDSCxDQUFDO0lBR0Qsc0JBQUksZ0RBQWdCO2FBQXBCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUE1RlE7UUFBUixZQUFLLEVBQUU7O3VEQUFnQjtJQUZiLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN6QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FXc0MseUJBQWdCLEVBQWtCLGVBQU0sRUFBdUIsMEJBQVc7T0FWckcsa0JBQWtCLENBK0Y5QjtJQUFELHlCQUFDO0NBQUEsQUEvRkQsSUErRkM7QUEvRlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3BhZ2Uuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1ib3R0b20tYmFyXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYm90dG9tLWJhci5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYm90dG9tLWJhci5jb21wb25lbnQuY3NzXCJdLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdmlzaWJsZSA9IHRydWU7XG5cbiAgYm90dG9tQmFySGVpZ2h0OiBhbnkgPSBcIlwiO1xuICBpbWdIZWlnaHQ6IGFueSA9IFwiXCI7XG4gIGltZ1dpZHRoOiBhbnkgPSBcIlwiO1xuICBhY3RpdmVJbmRleCA9IDA7XG4gIG9wYWN0aXkgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogUGFnZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGRldmljZUhlaWdodDogbnVtYmVyID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcztcbiAgICBjb25zdCBkZXZpY2VXaWR0aDogbnVtYmVyID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xuICAgIHRoaXMuYm90dG9tQmFySGVpZ2h0ID0gZGV2aWNlSGVpZ2h0ICogMC4xO1xuICAgIHRoaXMuaW1nSGVpZ2h0ID0gZGV2aWNlSGVpZ2h0ICogMC4wNDtcbiAgICB0aGlzLmltZ1dpZHRoID0gZGV2aWNlSGVpZ2h0ICogMC4wNDtcblxuICAgIC8vIGxldCBkYXRhID0gdGhpcy51c2VyU2VydmljZS5jdXJyZW50TGVhZFVwZGF0ZWQkLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAvLyB0aGlzLm9uQ2hhbmdlSW5kZXgoZGF0YSk7XG4gICAgLy8gfSlcblxuICAgICB0aGlzLnVzZXJTZXJ2aWNlLmN1cnJlbnRMZWFkVXBkYXRlZCQuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnc2Rmc2QnK2RhdGEpO1xuICAgICAgaWYgKGRhdGEgPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5vcGFjdGl5ID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wYWN0aXkgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIG9uQ2hhbmdlSW5kZXgoYXJncykge1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSBhcmdzO1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG5cbiAgICBzd2l0Y2ggKHRoaXMuYWN0aXZlSW5kZXgpIHtcbiAgICAgIGNhc2UgMDoge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2ZlZWRcIl0sIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9pdGFsa1wiXSwge1xuICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjoge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3RpbWVsaW5lXCJdLCB7XG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOiB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbW9yZVwiXSwge1xuICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICAgIC8vICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgLy8gICAgIFwidGl0bGVcIjogXCJXZWJcIixcbiAgICAgICAgLy8gICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zZWVmYXJtYS5pdC9jaGF0L1wiXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9O1xuXG4gICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIndlYnZpZXdcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xuICAgICAgICAvLyB1dGlscy5vcGVuVXJsKFwiaHR0cHM6Ly9zZWVmYXJtYS5pdC9jaGF0L1wiKVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG5cbiAgZ2V0IGFjdGl2ZUluZGV4VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5kZXg7XG4gIH1cbn1cbiJdfQ==