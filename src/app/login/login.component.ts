import { Component } from '@angular/core'; // Importation du décorateur Component
import { AuthService } from '../services/auth.service'; // Importation du service d'authentification
import { Router } from '@angular/router'; // Importation de Router pour la navigation
import { FormsModule } from '@angular/forms'; // Importation de FormsModule pour utiliser ngModel

@Component({
  selector: 'app-login', // Sélecteur pour le composant
  standalone: true, // Indique que ce composant est autonome
  imports: [FormsModule], // Importation de FormsModule pour gérer les formulaires
  templateUrl: './login.component.html', // Lien vers le fichier HTML du composant
  styleUrls: ['./login.component.css'] // Lien vers le fichier CSS du composant
})
export class LoginComponent {
  email: string = ''; // Propriété pour stocker l'email
  password: string = ''; // Propriété pour stocker le mot de passe

  constructor(private authService: AuthService, private router: Router) { } // Injection du service d'authentification et du Router

  // Méthode appelée lors de la soumission du formulaire de login
  onSubmit() {
    // Création d'un objet user avec les informations d'email et de mot de passe
    const user = {
      email: this.email,
      password: this.password
    };

    // Appel de la méthode login du service d'authentification
    this.authService.login(user.email, user.password).subscribe(
      response => {
        console.log('Connexion réussie', response); // Afficher la réponse de l'API
        if (response && response.token) { // Vérification si un token est retourné
          localStorage.setItem('userToken', response.token); // Stocker le token d'utilisateur dans le local storage
          this.router.navigate(['/verb-search']); // Rediriger l'utilisateur vers la page de recherche de verbes
        } else {
          console.error('Token non retourné');
        }
      },
      error => {
        console.error('Erreur lors de la connexion', error); // Afficher l'erreur en cas de problème
      }
    );
  }
}