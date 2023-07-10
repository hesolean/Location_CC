import { Injectable } from "@angular/core";
import { CampingCar } from "../models/camping-car.model";

@Injectable({
    //toute l'appli partage les mêmes services, une seule instance de ce service
    providedIn:'root'
})
export class campingCarService {
    //pas de ngOnInit
    campingCars: CampingCar[] = [
      {
        id: 0,
        reference: '1999-001',
        marque: 'Fiat Ducato',
        model: 'Notin Rubi JF',
        motorisation: '2.3',
        hauteur: 2.90,
        longueur: 7.19,
        largeur: 2.30,
        poidsTotalAutoriseEnCharge: 3500,
        chargeUtile: 125,
        profile: 'intégral',
        nombreDePlaces: 4,
        nombreCouchages: 4,
        disposition: '2 lits latéraux arrière',
        dateReservation: [],
        tarifJournalier: 142,
        imageUrl: 'https://images.pexels.com/photos/16035532/pexels-photo-16035532/free-photo-of-camping-car-dans-la-nature-en-norvege-avec-un-ciel-bleu.jpeg?auto=compress&cs=tinysrgb&w=1600',
        like: 0
      },
      {
        id: 1,
        reference: '1976-011',
        marque: 'Combi WolksVagen',
        model: '',
        motorisation: '1.8',
        hauteur: 1.90,
        longueur: 3.80,
        largeur: 1.90,
        poidsTotalAutoriseEnCharge: 2500,
        chargeUtile: 100,
        profile: 'combi',
        nombreDePlaces: 4,
        nombreCouchages: 2,
        disposition: '1 lit en hauteur',
        dateReservation: [],
        tarifJournalier: 235,
        imageUrl: 'https://images.pexels.com/photos/2775231/pexels-photo-2775231.jpeg?auto=compress&cs=tinysrgb&w=1600',
        like: 0
      },
      {
        id: 2,
        reference: '2019-023',
        marque: 'citroen jumpy',
        model: '',
        motorisation: '2.0',
        hauteur: 2.40,
        longueur: 4.19,
        largeur: 2.00,
        poidsTotalAutoriseEnCharge: 3000,
        chargeUtile: 105,
        profile: 'intégral',
        nombreDePlaces: 4,
        nombreCouchages: 2,
        disposition: '2 lits latéraux arrière',
        dateReservation: [],
        tarifJournalier: 112,
        imageUrl: 'https://images.pexels.com/photos/7476889/pexels-photo-7476889.jpeg?auto=compress&cs=tinysrgb&w=1600',
        like: 0
      },
      {
        id: 3,
        reference: '2022-004',
        marque: 'pilote',
        model: '',
        motorisation: '2.1',
        hauteur: 2.90,
        longueur: 6.52,
        largeur: 2.15,
        poidsTotalAutoriseEnCharge: 3300,
        chargeUtile: 115,
        profile: 'profilé',
        nombreDePlaces: 5,
        nombreCouchages: 4,
        disposition: 'à la française',
        dateReservation: [],
        tarifJournalier: 172,
        imageUrl: 'https://images.pexels.com/photos/7967386/pexels-photo-7967386.jpeg?auto=compress&cs=tinysrgb&w=1600',
        like: 0
      },
      {
        id: 4,
        reference: '1985-008',
        marque: 'peugeot',
        model: '',
        motorisation: '1.5L',
        hauteur: 2.00,
        longueur: 4.90,
        largeur: 1.90,
        poidsTotalAutoriseEnCharge: 2300,
        chargeUtile: 95,
        profile: 'intégral',
        nombreDePlaces: 2,
        nombreCouchages: 2,
        disposition: 'lit suspendu',
        dateReservation: [],
        tarifJournalier: 102,
        imageUrl: 'https://images.pexels.com/photos/11271824/pexels-photo-11271824.jpeg?auto=compress&cs=tinysrgb&w=1600',
        like: 0
      },
      {
        id: 5,
        reference: '2004-022',
        marque: 'Mercedes',
        model: '',
        motorisation: '3.0L',
        hauteur: 3.90,
        longueur: 9.90,
        largeur: 2.50,
        poidsTotalAutoriseEnCharge: 4500,
        chargeUtile: 250,
        profile: 'intégral',
        nombreDePlaces: 8,
        nombreCouchages: 6,
        disposition: '4 lits supperposés latéraux arrière',
        dateReservation: [],
        tarifJournalier: 365,
        imageUrl: 'https://images.pexels.com/photos/106401/pexels-photo-106401.jpeg?auto=compress&cs=tinysrgb&w=1600',
        like: 0
      }
    ]

    /**
     * 
     * @returns la liste de tous les campingCars
     */
    getAllCampingCars(): CampingCar[]{
        return this.campingCars;
    }

    /**
     * 
     * @param campingCarId id du camping car
     * @returns le camping car
     */
    getCampingCarById(campingCarId: number): CampingCar {
      const campingCar = this.campingCars.find(campingCar => campingCar.id === campingCarId);
      if (!campingCar) {
        throw new Error('CampingCar not found')
      } else {
        return campingCar;
      }
    }

    /**
     * on gère les likes par camping car individuellement
     * @param campingCarId identifiant du camping car
     * @param likeType like / unlike
     */
    likeCampingCarById(campingCarId: number, likeType: 'like' | 'unlike'): void {
      //on utilise un literalType avec likeType
      const campingCar = this.getCampingCarById(campingCarId);
      //fonction conditionnelle
      likeType === 'like' ? campingCar.like++ : campingCar.like--;
    }

    /**
     * ajoute un camping car à la liste
     * form : formulaire venant du composant newCampingCar
     */
    addNewCampingCar(form: CampingCar): void {
      form.id = this.campingCars.length+1;
      this.campingCars.push(form);
    }
}