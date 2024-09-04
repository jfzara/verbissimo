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

  signUp(email: string, name: string, password: string): Observable<any> {
    const user = { email, name, password };
    return this.http.post(this.apiUrl, user);
  }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(this.loginUrl, loginData); 
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
}