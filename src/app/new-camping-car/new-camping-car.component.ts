import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CampingCar } from '../models/camping-car.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-new-camping-car',
  templateUrl: './new-camping-car.component.html',
  styleUrls: ['./new-camping-car.component.scss']
})
export class NewCampingCarComponent implements OnInit {
  campingCarForm!: FormGroup;
  campingCarPreview$!: Observable<CampingCar>;
  
  constructor (private formBuilder: FormBuilder){}
  
  ngOnInit(): void {
    this.campingCarForm = this.formBuilder.group({
      reference: [null],
      marque: [null],
      model: [null],
      motorisation: 0,
      hauteur: 0,
      longueur: 0,
      largeur: 0,
      poidsTotalAutoriseEnCharge: 0,
      chargeUtile: 0,
      profile: [null],
      nombreDePlaces: 0,
      nombreCouchages: 0,
      disposition: [null],
      tarifJournalier: 0,
      imageUrl: [null]
    });

    this.campingCarPreview$ = this.campingCarForm.valueChanges.pipe( //prend en compte chaque modification du formulaire
      map(formValue => ({
        ...formValue, //... operateur spred
        id: 0,
        dateReservation: null,
        like:0
      }))
    )
  }

  onSubmitForm(): void {
    console.log(this.campingCarForm.value);
    
    //on répupère les campingCarForm.value pour les transmettre
  }

}
