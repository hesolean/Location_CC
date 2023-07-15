import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailCcComponent} from "./components/detail-cc/detail-cc.component";
import {FicheCcComponent} from "./components/fiche-cc/fiche-cc.component";
import {ListeCcComponent} from "./components/liste-cc/liste-cc.component";
import {NewCampingCarComponent} from "./components/new-camping-car/new-camping-car.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CampingCarsRoutingModule} from "./camping-cars-routing.module";

@NgModule({
  declarations: [
    DetailCcComponent,
    FicheCcComponent,
    ListeCcComponent,
    NewCampingCarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CampingCarsRoutingModule
  ],
  exports: [
    DetailCcComponent,
    FicheCcComponent,
    ListeCcComponent,
    NewCampingCarComponent
  ]
})
export class CampingCarsModule { }
