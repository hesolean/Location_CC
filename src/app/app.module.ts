import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 2 imports pour des données locales en français
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FicheCcComponent } from './fiche-cc/fiche-cc.component';
import { ListeCcComponent } from './liste-cc/liste-cc.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailCcComponent } from './detail-cc/detail-cc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCampingCarComponent } from './new-camping-car/new-camping-car.component';

@NgModule({
  declarations: [
    AppComponent,
    FicheCcComponent,
    ListeCcComponent,
    HeaderComponent,
    LandingPageComponent,
    DetailCcComponent,
    NewCampingCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // à ajouter en même temps que les imports pour le français
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // ajouter le constructeur en même temps que imports et provider pour les dates en local
  constructor() {
    registerLocaleData(fr.default);
  }
 }
