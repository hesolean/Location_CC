import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {httpInterceptorProviders} from "./interceptors";
import {RouterModule} from "@angular/router";
import * as fr from '@angular/common/locales/fr';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    httpInterceptorProviders
  ]
})
export class CoreModule {
  // ajouter le constructeur en même temps que imports et provider pour les dates en local
  constructor() {
    registerLocaleData(fr.default);
  }
}
