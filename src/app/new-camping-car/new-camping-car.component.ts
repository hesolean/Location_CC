import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-camping-car',
  templateUrl: './new-camping-car.component.html',
  styleUrls: ['./new-camping-car.component.scss']
})
export class NewCampingCarComponent implements OnInit {
  campingCarForm!: FormGroup;

  constructor (private formBuilder: FormBuilder){}
  
  ngOnInit(): void {
    this.campingCarForm = this.formBuilder.group({
      reference: [null],
      marque: [null],
      model: [null],
      motorisation: [null],
      hauteur: [null],
      longueur: [null],
      largeur: [null],
      poidsTotalAutoriseEnCharge: [null],
      chargeUtile: [null],
      profile: [null],
      nombreDePlaces: [null],
      nombreCouchages: [null],
      disposition: [null],
      dateReservation: [null],
      tarifJournalier: [null],
      imageUrl: [null],
      like: [null],
    })
  }

}
