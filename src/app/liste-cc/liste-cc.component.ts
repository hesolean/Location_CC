import { Component, OnInit } from '@angular/core';
import { CampingCar } from '../models/camping-car.model';
import { campingCarService } from '../services/camping-cars.service';

@Component({
  selector: 'app-liste-cc',
  templateUrl: './liste-cc.component.html',
  styleUrls: ['./liste-cc.component.scss']
})
export class ListeCcComponent implements OnInit{
  
  campingCars!: CampingCar[];

  constructor(private campingCarsService : campingCarService){}

  ngOnInit(): void {
    this.campingCars = this.campingCarsService.getAllCampingCars();
  }
}
