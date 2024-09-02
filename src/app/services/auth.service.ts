import { Injectable } from '@angular/core'; // Importation du décorateur Injectable pour rendre ce service injectable
import { HttpClient } from '@angular/common/http'; // Importation de HttpClient pour effectuer des requêtes HTTP
import { Observable } from 'rxjs'; // Importation d'Observable pour gérer les réponses asynchrones

@Injectable({
  providedIn: 'root' // Indique que ce service est disponible dans toute l'application, permettant son utilisation partout
})
export class AuthService { 
  private apiUrl = 'https://seal-app-v5cj7.ondigitalocean.app/v0/users/signup'; // URL de l'API pour l'inscription
  private loginUrl = 'https://seal-app-v5cj7.ondigitalocean.app/v0/users/login'; // URL de l'API pour le login

  constructor(private http: HttpClient) { }

  // Méthode pour s'inscrire
  signUp(email: string, name: string, password: string): Observable<any> {
    const user = { email, name, password };
    return this.http.post(this.apiUrl, user);
  }

  // Méthode pour se connecter
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password }; // Création de l'objet de login
    return this.http.post(this.loginUrl, loginData); // Envoi d'une requête POST à l'API de login avec les informations de l'utilisateur
  }
}
