import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private token!: string;

  login(): void {
    this.token = "myFackToken"; //on simule un token pour coder l'authentification
  }
  getToken(): string {
    return this.token;
  }
}
