import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''; // Champ d'email vide par défaut
  password: string = ''; // Champ de mot de passe vide par défaut
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const user = {
      email: this.email,
      password: this.password
    };

    this.authService.login(user.email, user.password).subscribe(
      response => {
        console.log('Connexion réussie', response);
        if (response && response.token) {
          localStorage.setItem('userToken', response.token);
          this.router.navigate(['/choice']); // Rediriger vers la page de choix
          this.errorMessage = ''; // Réinitialiser le message d'erreur
        } else {
          this.errorMessage = 'Erreur lors de la connexion. Veuillez réessayer.'; // Message d'erreur générique
        }
      },
      error => {
        console.error('Erreur lors de la connexion', error);
        this.errorMessage = 'Adresse e-mail ou mot de passe incorrect.'; // Message d'erreur spécifique
      }
    );
  }

  // Méthode pour vider les champs du formulaire lors de la déconnexion
  clearFields() {
    this.email = '';
    this.password = '';
    this.errorMessage = '';
  }
}