import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importation de CommonModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // Ajout de CommonModule ici
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
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
}