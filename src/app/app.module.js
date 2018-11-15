"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var bottom_bar_component_1 = require("./bottom-bar/bottom-bar.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var signup_component_1 = require("./signup/signup.component");
var angular_1 = require("nativescript-ui-dataform/angular");
var angular_2 = require("nativescript-checkbox/angular");
var timeline_module_1 = require("./timeline/timeline.module");
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
                bottom_bar_component_1.BottomBarComponent,
                signup_component_1.SignupComponent,
            ],
            providers: [],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0MsMEVBQXVFO0FBSXZFLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsa0ZBQWtGO0FBQ2xGLG1GQUFtRjtBQUNuRiw4REFBNEQ7QUFDNUQsNERBQWdGO0FBQ2hGLHlEQUFrRTtBQUNsRSw4REFBNEQ7QUEwQjVEO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXhCckIsZUFBUSxDQUFDO1lBQ1AsU0FBUyxFQUFFO2dCQUNSLDRCQUFZO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ04sd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLHNDQUE0QjtnQkFDNUIsMkJBQWlCO2dCQUNqQixnQ0FBYzthQUNoQjtZQUNELFlBQVksRUFBRTtnQkFDWCw0QkFBWTtnQkFDWix5Q0FBa0I7Z0JBQ2xCLGtDQUFlO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ04sdUJBQWdCO2FBQ2xCO1NBQ0gsQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQm90dG9tQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vYm90dG9tLWJhci9ib3R0b20tYmFyLmNvbXBvbmVudFwiO1xuXG5cblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xuaW1wb3J0IHsgVGltZWxpbmVNb2R1bGUgfSBmcm9tIFwiLi90aW1lbGluZS90aW1lbGluZS5tb2R1bGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgIGJvb3RzdHJhcDogW1xuICAgICAgQXBwQ29tcG9uZW50XG4gICBdLFxuICAgaW1wb3J0czogW1xuICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXG4gICAgICBUTlNDaGVja0JveE1vZHVsZSxcbiAgICAgIFRpbWVsaW5lTW9kdWxlXG4gICBdLFxuICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICBBcHBDb21wb25lbnQsXG4gICAgICBCb3R0b21CYXJDb21wb25lbnQsXG4gICAgICBTaWdudXBDb21wb25lbnQsXG4gICBdLFxuICAgcHJvdmlkZXJzOiBbXSxcbiAgIHNjaGVtYXM6IFtcbiAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=