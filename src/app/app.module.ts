import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {CampingCarsModule} from "./camping-cars/camping-cars.module";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    CampingCarsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
