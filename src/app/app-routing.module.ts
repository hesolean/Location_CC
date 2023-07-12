import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewCampingCarComponent} from "./camping-cars/components/new-camping-car/new-camping-car.component";
import {LandingPageComponent} from "./landing-page/components/landing-page/landing-page.component";
import {DetailCcComponent} from "./camping-cars/components/detail-cc/detail-cc.component";
import {ListeCcComponent} from "./camping-cars/components/liste-cc/liste-cc.component";

const routes: Routes = [
  { path: 'campingCars/:id', component: DetailCcComponent },
  { path: 'campingCars', component: ListeCcComponent },
  { path: 'create', component: NewCampingCarComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
