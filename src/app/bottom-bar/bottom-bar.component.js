"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var platformModule = require("tns-core-modules/platform");
var router_2 = require("@angular/router");
var BottomBarComponent = /** @class */ (function () {
    function BottomBarComponent(routerExtensions, router) {
        this.routerExtensions = routerExtensions;
        this.router = router;
        this.visible = true;
        this.bottomBarHeight = "";
        this.imgHeight = "";
        this.activeIndex = 0;
    }
    BottomBarComponent.prototype.ngOnInit = function () {
        var deviceHeight = platformModule.screen.mainScreen.heightDIPs;
        var deviceWidth = platformModule.screen.mainScreen.widthDIPs;
        this.imgHeight = deviceHeight * 0.085;
        // let data = this.userService.currentLeadUpdated$.subscribe((data) => {
        // console.log(data);
        // this.onChangeIndex(data);
        // })
    };
    BottomBarComponent.prototype.onChangeIndex = function (args) {
        this.activeIndex = args;
        this.visible = true;
        switch (this.activeIndex) {
            case 0:
                {
                    this.routerExtensions.navigate(["/home"], {
                        transition: {
                            name: "fade",
                            curve: "linear"
                        }
                    });
                }
                break;
            case 1:
                {
                    this.routerExtensions.navigate(["/todo"], {
                        transition: {
                            name: "fade",
                            curve: "linear"
                        }
                    });
                }
                break;
            case 2:
                {
                    this.routerExtensions.navigate(["/calender"], {
                        transition: {
                            name: "fade",
                            curve: "linear"
                        }
                    });
                }
                break;
            case 3: {
                this.routerExtensions.navigate(["/chat"], {
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
        __metadata("design:paramtypes", [router_1.RouterExtensions, router_2.Router])
    ], BottomBarComponent);
    return BottomBarComponent;
}());
exports.BottomBarComponent = BottomBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3R0b20tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsMERBQTREO0FBRTVELDBDQUEyRDtBQVMzRDtJQVNFLDRCQUFvQixnQkFBa0MsRUFBVSxNQUFjO1FBQTFELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUHJFLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFFeEIsb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixnQkFBVyxHQUFHLENBQUMsQ0FBQztJQUdrRSxDQUFDO0lBRW5GLHFDQUFRLEdBQVI7UUFDRSxJQUFNLFlBQVksR0FBVyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDekUsSUFBTSxXQUFXLEdBQVcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUV0Qyx3RUFBd0U7UUFDdEUscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUM5QixLQUFLO0lBQ1AsQ0FBQztJQUdELDBDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEtBQUssQ0FBQztnQkFBRSxDQUFDO29CQUNQLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTt3QkFDeEMsVUFBVSxFQUFFOzRCQUNWLElBQUksRUFBRSxNQUFNOzRCQUNaLEtBQUssRUFBRSxRQUFRO3lCQUNoQjtxQkFDRixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDQyxLQUFLLENBQUM7WUFDUixLQUFLLENBQUM7Z0JBQUUsQ0FBQztvQkFDUCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ3hDLFVBQVUsRUFBRTs0QkFDVixJQUFJLEVBQUUsTUFBTTs0QkFDWixLQUFLLEVBQUUsUUFBUTt5QkFDaEI7cUJBQ0YsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0MsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDO2dCQUFFLENBQUM7b0JBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFO3dCQUM1QyxVQUFVLEVBQUU7NEJBQ1YsSUFBSSxFQUFFLE1BQU07NEJBQ1osS0FBSyxFQUFFLFFBQVE7eUJBQ2hCO3FCQUNGLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUNDLEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN4QyxVQUFVLEVBQUU7d0JBQ1YsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFFBQVE7cUJBQ2hCO2lCQUNGLENBQUMsQ0FBQztnQkFFSCw2Q0FBNkM7Z0JBQzdDLG1CQUFtQjtnQkFDbkIsc0JBQXNCO2dCQUN0Qix5Q0FBeUM7Z0JBQ3pDLE1BQU07Z0JBQ04sS0FBSztnQkFFTCx1REFBdUQ7Z0JBQ3ZELDZDQUE2QztnQkFDN0MsS0FBSyxDQUFDO1lBQ1IsQ0FBQztZQUNEO2dCQUNFLEtBQUssQ0FBQztRQUNWLENBQUM7SUFDSCxDQUFDO0lBR0Qsc0JBQUksZ0RBQWdCO2FBQXBCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFoRlE7UUFBUixZQUFLLEVBQUU7O3VEQUFnQjtJQUZiLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN6QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FVc0MseUJBQWdCLEVBQWtCLGVBQU07T0FUbkUsa0JBQWtCLENBbUY5QjtJQUFELHlCQUFDO0NBQUEsQUFuRkQsSUFtRkM7QUFuRlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtYm90dG9tLWJhclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2JvdHRvbS1iYXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2JvdHRvbS1iYXIuY29tcG9uZW50LmNzc1wiXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHZpc2libGUgPSB0cnVlO1xuXG4gIGJvdHRvbUJhckhlaWdodDogYW55ID0gXCJcIjtcbiAgaW1nSGVpZ2h0OiBhbnkgPSBcIlwiO1xuICBhY3RpdmVJbmRleCA9IDA7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGRldmljZUhlaWdodDogbnVtYmVyID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcztcbiAgICBjb25zdCBkZXZpY2VXaWR0aDogbnVtYmVyID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xuICAgIHRoaXMuaW1nSGVpZ2h0ID0gZGV2aWNlSGVpZ2h0ICogMC4wODU7XG5cbiAgICAvLyBsZXQgZGF0YSA9IHRoaXMudXNlclNlcnZpY2UuY3VycmVudExlYWRVcGRhdGVkJC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgLy8gdGhpcy5vbkNoYW5nZUluZGV4KGRhdGEpO1xuICAgIC8vIH0pXG4gIH1cblxuXG4gIG9uQ2hhbmdlSW5kZXgoYXJncykge1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSBhcmdzO1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG5cbiAgICBzd2l0Y2ggKHRoaXMuYWN0aXZlSW5kZXgpIHtcbiAgICAgIGNhc2UgMDoge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90b2RvXCJdLCB7XG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2FsZW5kZXJcIl0sIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jaGF0XCJdLCB7XG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgLy8gICBxdWVyeVBhcmFtczoge1xuICAgICAgICAvLyAgICAgXCJ0aXRsZVwiOiBcIldlYlwiLFxuICAgICAgICAvLyAgICAgXCJ1cmxcIjogXCJodHRwczovL3NlZWZhcm1hLml0L2NoYXQvXCJcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wid2Vidmlld1wiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gICAgICAgIC8vIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL3NlZWZhcm1hLml0L2NoYXQvXCIpXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cblxuICBnZXQgYWN0aXZlSW5kZXhWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbmRleDtcbiAgfVxufVxuIl19