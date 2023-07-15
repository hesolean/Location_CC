import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DetailCcComponent} from "./components/detail-cc/detail-cc.component";
import {ListeCcComponent} from "./components/liste-cc/liste-cc.component";
import {NewCampingCarComponent} from "./components/new-camping-car/new-camping-car.component";
import {AuthGuard} from "../core/guard/auth.guard";

const routes: Routes = [
  { path: 'create', component: NewCampingCarComponent, canActivate: [AuthGuard] },
  { path: ':id', component: DetailCcComponent, canActivate: [AuthGuard] },
  { path: '', component: ListeCcComponent, canActivate: [AuthGuard] }
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
