import { Component, Input } from '@angular/core';
import { CampingCar } from '../models/camping-car.model';
import { campingCarService } from '../services/camping-cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-cc',
  templateUrl: './fiche-cc.component.html',
  styleUrls: ['./fiche-cc.component.scss']
})
export class FicheCcComponent {
  // injecté depuis le parent donc instance dans le parent
  @Input()
  campingCar!: CampingCar;

  buttonValue!: string;

  constructor(
    private campingCarService: campingCarService,
    private router: Router){}

  ngOnInit(): void {
    this.buttonValue = "Like !";

  }

  /**
   * montre la fiche complète
   */
  onViewCampingCar(){
    this.router.navigateByUrl(`campingCars/${this.campingCar.id}`)
  }
}
