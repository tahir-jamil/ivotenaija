"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var signup_component_1 = require("./signup/signup.component");
var angular_1 = require("nativescript-ui-dataform/angular");
var angular_2 = require("nativescript-checkbox/angular");
var timeline_module_1 = require("./timeline/timeline.module");
var cadidateofweek_component_1 = require("./cadidateofweek/cadidateofweek.component");
var feedPage_component_1 = require("./feedPage/feedPage.component");
var italk_component_1 = require("./italk/italk.component");
var search_component_1 = require("./search/search.component");
var more_component_1 = require("./more/more.component");
var bottom_bar_component_1 = require("./bottom-bar/bottom-bar.component");
var feeddetail_component_1 = require("./feeddetail/feeddetail.component");
var page_service_1 = require("./page.service");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                angular_1.NativeScriptUIDataFormModule,
                angular_2.TNSCheckBoxModule,
                timeline_module_1.TimelineModule
            ],
            declarations: [
                app_component_1.AppComponent,
                signup_component_1.SignupComponent,
                cadidateofweek_component_1.CadidateofweekComponent,
                feedPage_component_1.FeedPageComponent,
                italk_component_1.ItalkComponent,
                search_component_1.SearchComponent,
                more_component_1.MoreComponent,
                bottom_bar_component_1.BottomBarComponent,
                feeddetail_component_1.FeeddetailComponent
            ],
            providers: [page_service_1.PageService],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0MsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSxrRkFBa0Y7QUFDbEYsbUZBQW1GO0FBQ25GLDhEQUE0RDtBQUM1RCw0REFBZ0Y7QUFDaEYseURBQWtFO0FBQ2xFLDhEQUE0RDtBQUM1RCxzRkFBb0Y7QUFDcEYsb0VBQWtFO0FBQ2xFLDJEQUF5RDtBQUN6RCw4REFBNEQ7QUFDNUQsd0RBQXNEO0FBQ3RELDBFQUF1RTtBQUN2RSwwRUFBd0U7QUFDeEUsK0NBQTZDO0FBZ0M3QztJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUE5QnJCLGVBQVEsQ0FBQztZQUNQLFNBQVMsRUFBRTtnQkFDUiw0QkFBWTthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNOLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQixzQ0FBNEI7Z0JBQzVCLDJCQUFpQjtnQkFDakIsZ0NBQWM7YUFDaEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1gsNEJBQVk7Z0JBQ1osa0NBQWU7Z0JBQ2Ysa0RBQXVCO2dCQUN2QixzQ0FBaUI7Z0JBQ2pCLGdDQUFjO2dCQUNkLGtDQUFlO2dCQUNmLDhCQUFhO2dCQUNiLHlDQUFrQjtnQkFDbEIsMENBQW1CO2FBQ3JCO1lBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixPQUFPLEVBQUU7Z0JBQ04sdUJBQWdCO2FBQ2xCO1NBQ0gsQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xuaW1wb3J0IHsgVGltZWxpbmVNb2R1bGUgfSBmcm9tIFwiLi90aW1lbGluZS90aW1lbGluZS5tb2R1bGVcIjtcbmltcG9ydCB7IENhZGlkYXRlb2Z3ZWVrQ29tcG9uZW50IH0gZnJvbSBcIi4vY2FkaWRhdGVvZndlZWsvY2FkaWRhdGVvZndlZWsuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGZWVkUGFnZUNvbXBvbmVudCB9IGZyb20gXCIuL2ZlZWRQYWdlL2ZlZWRQYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRhbGtDb21wb25lbnQgfSBmcm9tIFwiLi9pdGFsay9pdGFsay5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC9zZWFyY2guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNb3JlQ29tcG9uZW50IH0gZnJvbSBcIi4vbW9yZS9tb3JlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQm90dG9tQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vYm90dG9tLWJhci9ib3R0b20tYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmVlZGRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vZmVlZGRldGFpbC9mZWVkZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gXCIuL3BhZ2Uuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgYm9vdHN0cmFwOiBbXG4gICAgICBBcHBDb21wb25lbnRcbiAgIF0sXG4gICBpbXBvcnRzOiBbXG4gICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcbiAgICAgIFROU0NoZWNrQm94TW9kdWxlLFxuICAgICAgVGltZWxpbmVNb2R1bGVcbiAgIF0sXG4gICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgIFNpZ251cENvbXBvbmVudCxcbiAgICAgIENhZGlkYXRlb2Z3ZWVrQ29tcG9uZW50LFxuICAgICAgRmVlZFBhZ2VDb21wb25lbnQsXG4gICAgICBJdGFsa0NvbXBvbmVudCxcbiAgICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICAgIE1vcmVDb21wb25lbnQsXG4gICAgICBCb3R0b21CYXJDb21wb25lbnQsXG4gICAgICBGZWVkZGV0YWlsQ29tcG9uZW50XG4gICBdLFxuICAgcHJvdmlkZXJzOiBbUGFnZVNlcnZpY2VdLFxuICAgc2NoZW1hczogW1xuICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==