import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Permet d'injecter ce service dans d'autres parties de l'application
})
export class VerbService {
  private apiUrl = 'https://seal-app-v5cj7.ondigitalocean.app/v0/verbs/'; // URL de l'API

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer des informations sur un verbe spécifique
  getVerbs(verb: string, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-access-token': token // Ajoute le token d'authentification dans les en-têtes
    });

    // Effectue une requête POST pour récupérer les informations du verbe
    return this.http.post(this.apiUrl, { verb }, { headers });
  }
}