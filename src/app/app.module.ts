import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {CampingCarsModule} from "./camping-cars/camping-cars.module";
import {LandingPageModule} from "./landing-page/landing-page.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    CampingCarsModule,
    LandingPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
