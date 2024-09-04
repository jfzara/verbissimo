import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    SignUpComponent,
    MatCardModule
  ]
})
export class AuthComponent {
  showLogin: boolean = true; // Variable pour afficher le formulaire de connexion ou d'inscription
  isLoggedIn: boolean = false; // Variable pour suivre l'état de connexion
  isSignedUp: boolean = false; // Ajoutez cette variable

  constructor(private authService: AuthService, private router: Router) {
    // Vérifiez si l'utilisateur est connecté au moment de l'initialisation
    this.isLoggedIn = this.authService.isLoggedIn(); 
  }

  toggleForm() {
    this.showLogin = !this.showLogin; // Alterner entre le formulaire de connexion et d'inscription
  }

  logout() {
    this.authService.logout(); // Appel au service d'authentification pour se déconnecter
    this.isLoggedIn = false; // Mettre à jour l'état de connexion
    this.router.navigate(['/']); // Redirection vers la page d'accueil

    // Vider les champs du formulaire de connexion
    const loginComponent = new LoginComponent(this.authService, this.router);
    loginComponent.clearFields(); 
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

  // Méthode pour gérer l'inscription réussie
  handleSignUp() {
    this.showLogin = true; // Faire apparaître le formulaire de connexion après l'inscription réussie
    this.isSignedUp = true; // Mettez à jour l'état d'inscription
    this.isLoggedIn = true; // Mettez à jour l'état de connexion si nécessaire
    this.router.navigate(['/']); // Redirection vers la page de connexion
  }
}