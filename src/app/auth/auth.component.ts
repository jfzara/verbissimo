import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../services/auth.service'; // Assurez-vous que le chemin est correct
import { Router } from '@angular/router'; // Importez Router pour la redirection

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    SignUpComponent,
    MatCardModule // Ajoutez MatCardModule ici
  ]
})
export class AuthComponent {
  showLogin: boolean = true;
  isLoggedIn: boolean = false; // Variable pour suivre l'état de connexion

  constructor(private authService: AuthService, private router: Router) {
    // Vérifiez si l'utilisateur est connecté au moment de l'initialisation
    this.isLoggedIn = this.authService.isLoggedIn(); 
  }

  toggleForm() {
    this.showLogin = !this.showLogin;
  }

  logout() {
    this.authService.logout(); // Appel au service d'authentification pour se déconnecter
    this.isLoggedIn = false; // Mettre à jour l'état de connexion
    this.router.navigate(['/']); // Redirection vers la page d'accueil
  }

  // Méthode pour gérer la connexion
  login(email: string, password: string) {
    this.authService.login(email, password).subscribe({
      next: (response) => {
        // Stockez le token si la connexion est réussie
        this.authService.setToken(response.token);
        this.isLoggedIn = true; // Mettez à jour l'état de connexion
        this.router.navigate(['/']); // Redirection après connexion
      },
      error: (error) => {
        console.error('Erreur de connexion:', error);
        // Gérez les erreurs de connexion ici (affichage d'un message d'erreur, par exemple)
      }
    });
  }
}