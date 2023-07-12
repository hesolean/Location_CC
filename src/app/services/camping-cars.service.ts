import { Injectable } from "@angular/core";
import { CampingCar } from "../models/camping-car.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";

@Injectable({
    //toute l'appli partage les mêmes services, une seule instance de ce service
    providedIn:'root'
})
export class campingCarService {

  constructor(private http: HttpClient) {
  }
    //pas de ngOnInit

    /**
     *
     * @returns la liste de tous les campingCars
     */
    getAllCampingCars(): Observable<CampingCar[]>{
      return this.http.get<CampingCar[]>('http://localhost:3000/campingCars');
    }

    /**
     *
     * @param campingCarId id du camping car
     * @returns le camping car
     */
    getCampingCarById(campingCarId: number): Observable<CampingCar> {
      return this.http.get<CampingCar>(`http://localhost:3000/campingCars/${campingCarId}`)
    }

    /**
     * on gère les likes par camping car individuellement
     * @param campingCarId identifiant du camping car
     * @param likeType like / unlike
     */
    likeCampingCarById(campingCarId: number, likeType: 'like' | 'unlike'): Observable<CampingCar> {
      return this.getCampingCarById(campingCarId).pipe(
        map(campingcar =>  ({
          ...campingcar,
          like: campingcar.like + (likeType === 'like' ? 1 : -1)
        })),
        switchMap(updatedCampingcar => this.http.put<CampingCar>(
          `http://localhost:3000/campingCars/${campingCarId}`, updatedCampingcar
        ))
      );
    }

    /**
     * ajoute un camping car à la liste
     * form : formulaire venant du composant newCampingCar
     */
    addNewCampingCar(form: CampingCar): Observable<CampingCar> {
      console.log("addNewCampingCar");
      return this.getAllCampingCars().pipe(
        map(campingcar => [...campingcar].sort((a,b) => a.id - b.id)),
        map(sortedCampingcar => sortedCampingcar[sortedCampingcar.length -1]),
        map(previousCampingcar => ({
          ...form,
          id: previousCampingcar.id + 1
        })),
        switchMap(newCampingcar => this.http.post<CampingCar>(
          'http://localhost:3000/campingcars', newCampingcar
        ))
      );
    }
}
