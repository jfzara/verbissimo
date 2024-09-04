import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://seal-app-v5cj7.ondigitalocean.app/v0/users/signup'; 
  private loginUrl = 'https://seal-app-v5cj7.ondigitalocean.app/v0/users/login'; 

  constructor(private http: HttpClient) { }

  // Méthode pour s'inscrire
  signUp(email: string, name: string, password: string): Observable<any> {
    const user = { email, name, password };
    return this.http.post(this.apiUrl, user);
  }

  // Méthode pour se connecter
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(this.loginUrl, loginData); 
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null; // Vérifiez si un token est stocké
  }

  // Méthode pour se déconnecter
  logout(): void {
    localStorage.removeItem('token'); // Supprimez le token de localStorage
  }

  // Vous pouvez également ajouter une méthode pour stocker le token après une connexion réussie
  setToken(token: string): void {
    localStorage.setItem('token', token); // Stocke le token dans localStorage
  }
}