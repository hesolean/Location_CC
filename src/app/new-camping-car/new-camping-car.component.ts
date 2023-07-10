import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampingCar } from '../models/camping-car.model';
import { Observable, map } from 'rxjs';
import { campingCarService } from '../services/camping-cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-camping-car',
  templateUrl: './new-camping-car.component.html',
  styleUrls: ['./new-camping-car.component.scss']
})
export class NewCampingCarComponent implements OnInit {
  campingCarForm!: FormGroup;
  campingCarPreview$!: Observable<CampingCar>;
  urlRegex!: RegExp;

  constructor (private formBuilder: FormBuilder, 
    private router: Router,
    private campingCarService: campingCarService
    ){}
  
  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.campingCarForm = this.formBuilder.group({
      reference: [null, Validators.required],
      marque: [null, Validators.required],
      model: [null],
      motorisation: [0, Validators.required],
      hauteur: 0,
      longueur: 0,
      largeur: 0,
      poidsTotalAutoriseEnCharge: 0,
      chargeUtile: 0,
      profile: [null, Validators.required],
      nombreDePlaces: [0, Validators.required],
      nombreCouchages: [0, Validators.required],
      disposition: [null],
      tarifJournalier: [0, Validators.required],
      imageUrl: [null, Validators.required, Validators.pattern(this.urlRegex)]
    },
    {
      updateOn: 'blur' // on ne prend en compte les changements du formulaire que quand on change de champs
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
    const newCampingCar: CampingCar = {
      ...this.campingCarForm.value,
      id: 0,
      dateReservation: undefined,
      like:0
    }

    this.campingCarService.addNewCampingCar(newCampingCar);
    this.router.navigateByUrl('campingCars');
    //on répupère les campingCarForm.value pour les transmettre
  }

}
