import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerbService {
  private apiUrl = 'https://seal-app-v5cj7.ondigitalocean.app/v0/verbs/';

  constructor(private http: HttpClient) { }

  getVerbs(verb: string, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-access-token': token
    });

    return this.http.post<any>(this.apiUrl, { verb }, { headers }).pipe(
      catchError(error => {
        console.error('Erreur lors de la récupération des verbes:', error);
        return throwError('Une erreur est survenue lors de la récupération des verbes.');
      })
    );
  }

  getRandomVerbs(quantity: number, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-access-token': token
    });
  
    return this.http.post(`${this.apiUrl}random`, { quantity }, { headers }).pipe(
      catchError(error => {
        console.error('Erreur lors de la récupération des verbes aléatoires:', error);
        return throwError('Une erreur est survenue lors de la récupération des verbes aléatoires.');
      })
    );
  }
}