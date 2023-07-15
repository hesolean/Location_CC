import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable() // pas de provided car différent des services
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }
  // appelé pour toute requete http
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //création des headers utilisables par Angular
    //.append ajoute une autorisation
    const headers = new HttpHeaders()
      .append('Authorization', `Bearer ${this.authService.getToken()}`);// ne peut pas le modifier
    const modifiedReq = req.clone({headers}); //on clone la requete car les requetes sont imuables
    return next.handle(modifiedReq); //on renvoie la version modifiée
  }
}
