import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DetailCcComponent} from "./components/detail-cc/detail-cc.component";
import {ListeCcComponent} from "./components/liste-cc/liste-cc.component";
import {NewCampingCarComponent} from "./components/new-camping-car/new-camping-car.component";

const routes: Routes = [
  { path: 'create', component: NewCampingCarComponent },
  { path: ':id', component: DetailCcComponent },
  { path: '', component: ListeCcComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CampingCarsRoutingModule{

}
