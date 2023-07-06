import { Component, Input, OnInit } from '@angular/core';
import { CampingCar } from '../models/camping-car.model';
import { campingCarService } from '../services/camping-cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-cc',
  templateUrl: './detail-cc.component.html',
  styleUrls: ['./detail-cc.component.scss']
})
export class DetailCcComponent implements OnInit {
  // injecté depuis le parent donc instance dans le parent
  @Input()
  campingCar!: CampingCar;

  buttonValue!: string;

  constructor(
    private campingCarService: campingCarService,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.buttonValue = "Like !";
    //le + transforme this.route.snapshot.params['id'] qui est une chaine de caractères en number
    const campingCarId = +this.route.snapshot.params['id'];
    this.campingCar = this.campingCarService.getCampingCarById(campingCarId);
  }

  /**
   * like / unlike
   */
  onLike(){
    if (this.buttonValue === "Like !") {
      this.campingCarService.likeCampingCarById(this.campingCar.id, 'like');
      this.buttonValue = "Oops, unlike !";
    } else {
      this.campingCarService.likeCampingCarById(this.campingCar.id, 'unlike');
      this.buttonValue = "Like !"
    }

  }
}
