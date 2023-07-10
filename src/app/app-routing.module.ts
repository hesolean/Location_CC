import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCcComponent } from './detail-cc/detail-cc.component';
import { ListeCcComponent } from './liste-cc/liste-cc.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'campingCars/:id', component: DetailCcComponent },
  { path: 'campingCars', component: ListeCcComponent },
  { path: 'create', component: ListeCcComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
