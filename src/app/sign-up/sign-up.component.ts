import { Component } from '@angular/core'; // Importation du décorateur Component
import { AuthService } from '../services/auth.service'; // Importation du service d'authentification
import { Router } from '@angular/router'; // Importation de Router pour la navigation
import { FormsModule } from '@angular/forms'; // Importation de FormsModule pour utiliser ngModel
import { RouterOutlet } from '@angular/router'; // Importation pour RouterOutlet
import { HttpClientModule } from '@angular/common/http'; // Importation pour HttpClient

@Component({
  selector: 'app-sign-up', // Sélecteur pour le composant
  standalone: true, // Indique que ce composant est autonome
  imports: [FormsModule, RouterOutlet, HttpClientModule], // Importation des modules nécessaires
  templateUrl: './sign-up.component.html', // Lien vers le fichier HTML du composant
  styleUrls: ['./sign-up.component.css'], // Lien vers le fichier CSS du composant
  providers: [AuthService]  // Ajout du AuthService ici
})
export class SignUpComponent {
  email: string = ''; // Propriété pour stocker l'email
  name: string = ''; // Propriété pour stocker le nom
  password: string = ''; // Propriété pour stocker le mot de passe

  constructor(private authService: AuthService, private router: Router) { } // Injection du service d'authentification et du Router

  // Méthode appelée lors de la soumission du formulaire d'inscription
  onSubmit() {
    // Appel de la méthode signUp du service d'authentification avec les trois arguments
    this.authService.signUp(this.email, this.name, this.password).subscribe(
      response => {
        console.log('Inscription réussie', response); // Afficher la réponse de l'API
        localStorage.setItem('userName', this.name); // Stockage du nom d'utilisateur dans le local storage
        this.router.navigate(['/']); // Rediriger l'utilisateur vers la page d'accueil ou une autre page
      },
      error => {
        console.error('Erreur lors de l\'inscription', error); // Afficher l'erreur en cas de problème
      }
    );
  }
}