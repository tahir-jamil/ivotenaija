import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BottomBarComponent } from "./bottom-bar/bottom-bar.component";



// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { SignupComponent } from './signup/signup.component';
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { TimelineModule } from "./timeline/timeline.module";

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      AppRoutingModule,
      NativeScriptUIDataFormModule,
      TNSCheckBoxModule,
      TimelineModule
   ],
   declarations: [
      AppComponent,
      BottomBarComponent,
      SignupComponent,
   ],
   providers: [],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
