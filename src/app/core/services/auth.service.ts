import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private token = "myFackToken"; //on simule un token pour coder l'authentification

  getToken(): string {
    return this.token;
  }
}
