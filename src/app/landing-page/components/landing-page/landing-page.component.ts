import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  userEmail: string = 'your-adress@home.com'; //ne s'en sert pas si on passe par la directive ngForm du template

  constructor(private router: Router){}

  ngOnInit(): void {

  }

  onContinue():void {
    this.router.navigateByUrl('campingCars');
  }

  onSubmitEmail(form: NgForm): void { //NgForm est le type associé à la directive du template, on récupère un objet
    //envoyer dans le service pour communiquer à la bdd
    console.log(form.value);
  }
}
