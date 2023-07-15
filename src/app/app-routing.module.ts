import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/components/landing-page/landing-page.component";

const routes: Routes = [
  //Lazy Loading
  { path: 'campingCars', loadChildren: () => import('./camping-cars/camping-cars.module').then(m => m.CampingCarsModule)},
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
