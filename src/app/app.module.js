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
                timeline_module_1.TimelineModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                signup_component_1.SignupComponent,
                cadidateofweek_component_1.CadidateofweekComponent,
                feedPage_component_1.FeedPageComponent,
                italk_component_1.ItalkComponent,
                search_component_1.SearchComponent,
                more_component_1.MoreComponent,
                bottom_bar_component_1.BottomBarComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFJL0MsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSxrRkFBa0Y7QUFDbEYsbUZBQW1GO0FBQ25GLDhEQUE0RDtBQUM1RCw0REFBZ0Y7QUFDaEYseURBQWtFO0FBQ2xFLDhEQUE0RDtBQUM1RCxzRkFBb0Y7QUFDcEYsb0VBQWtFO0FBQ2xFLDJEQUF5RDtBQUN6RCw4REFBNEQ7QUFFNUQsd0RBQXNEO0FBQ3RELDBFQUF1RTtBQStCdkU7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBN0JyQixlQUFRLENBQUM7WUFDUCxTQUFTLEVBQUU7Z0JBQ1IsNEJBQVk7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTix3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsc0NBQTRCO2dCQUM1QiwyQkFBaUI7Z0JBQ2pCLGdDQUFjO2FBQ2hCO1lBQ0QsWUFBWSxFQUFFO2dCQUNYLDRCQUFZO2dCQUNaLGtDQUFlO2dCQUNmLGtEQUF1QjtnQkFDdkIsc0NBQWlCO2dCQUNqQixnQ0FBYztnQkFDZCxrQ0FBZTtnQkFDZiw4QkFBYTtnQkFDYix5Q0FBa0I7YUFDcEI7WUFDRCxTQUFTLEVBQUUsRUFBRTtZQUNiLE9BQU8sRUFBRTtnQkFDTix1QkFBZ0I7YUFDbEI7U0FDSCxDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cblxuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhcic7XG5pbXBvcnQgeyBUaW1lbGluZU1vZHVsZSB9IGZyb20gXCIuL3RpbWVsaW5lL3RpbWVsaW5lLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ2FkaWRhdGVvZndlZWtDb21wb25lbnQgfSBmcm9tIFwiLi9jYWRpZGF0ZW9md2Vlay9jYWRpZGF0ZW9md2Vlay5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZlZWRQYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVlZFBhZ2UvZmVlZFBhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGFsa0NvbXBvbmVudCB9IGZyb20gXCIuL2l0YWxrL2l0YWxrLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRpbWVsaW5lQ29tcG9uZW50IH0gZnJvbSBcIi4vdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNb3JlQ29tcG9uZW50IH0gZnJvbSBcIi4vbW9yZS9tb3JlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQm90dG9tQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vYm90dG9tLWJhci9ib3R0b20tYmFyLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgYm9vdHN0cmFwOiBbXG4gICAgICBBcHBDb21wb25lbnRcbiAgIF0sXG4gICBpbXBvcnRzOiBbXG4gICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcbiAgICAgIFROU0NoZWNrQm94TW9kdWxlLFxuICAgICAgVGltZWxpbmVNb2R1bGUsXG4gICBdLFxuICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICBBcHBDb21wb25lbnQsXG4gICAgICBTaWdudXBDb21wb25lbnQsXG4gICAgICBDYWRpZGF0ZW9md2Vla0NvbXBvbmVudCxcbiAgICAgIEZlZWRQYWdlQ29tcG9uZW50LFxuICAgICAgSXRhbGtDb21wb25lbnQsXG4gICAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgICBNb3JlQ29tcG9uZW50LFxuICAgICAgQm90dG9tQmFyQ29tcG9uZW50XG4gICBdLFxuICAgcHJvdmlkZXJzOiBbXSxcbiAgIHNjaGVtYXM6IFtcbiAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=