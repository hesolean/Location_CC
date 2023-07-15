import { Component, Input, OnInit } from '@angular/core';
import { CampingCar } from '../../../core/models/camping-car.model';
import { campingCarService } from '../../../core/services/camping-cars.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-detail-cc',
  templateUrl: './detail-cc.component.html',
  styleUrls: ['./detail-cc.component.scss']
})
export class DetailCcComponent implements OnInit {
  campingCar$!: Observable<CampingCar>;
  buttonValue!: string;

  constructor(
    private campingCarService: campingCarService,
    private route: ActivatedRoute,
    private router: Router,
    ){}

  ngOnInit(): void {
    this.buttonValue = "Like !";
    //le + transforme this.route.snapshot.params['id'] qui est une chaine de caractères en number
    const campingCarId = +this.route.snapshot.params['id'];
    this.campingCar$ = this.campingCarService.getCampingCarById(campingCarId);
  }

  /**
   * like / unlike
   */
  onLike(campingCarId: number){
    if (this.buttonValue === "Like !") {
      this.campingCarService.likeCampingCarById(campingCarId, 'like').pipe(
        tap(() => this.campingCar$ = this.campingCarService.getCampingCarById(campingCarId))
      ).subscribe();
      this.buttonValue = "Oops, unlike !";
    } else {
      this.campingCarService.likeCampingCarById(campingCarId, 'unlike').pipe(
        tap(() => this.campingCar$ = this.campingCarService.getCampingCarById(campingCarId))
      ).subscribe();
      this.buttonValue = "Like !"
    }

  }

  onDelete(campingCarId: number) {
    this.campingCarService.deleteCampingCar(campingCarId);
    this.router.navigateByUrl('/campingCars');
  }
}
