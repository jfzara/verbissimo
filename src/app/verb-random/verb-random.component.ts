import { Component } from '@angular/core';
import { VerbService } from '../services/verb.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Ajoutez cela
import { FormsModule } from '@angular/forms'; // Ajoutez cela

@Component({
  selector: 'app-verb-random',
  standalone: true,
  templateUrl: './verb-random.component.html',
  styleUrls: ['./verb-random.component.css'],
  imports: [CommonModule, FormsModule] // Importez les modules nécessaires
})
export class VerbRandomComponent {
  numberOfVerbs: number = 2; // Valeur par défaut
  randomVerbs: string[] = [];
  errorMessage: string = '';

  constructor(public verbService: VerbService, public router: Router) {}

  getRandomVerbs() {
    if (this.numberOfVerbs < 2 || this.numberOfVerbs > 20) {
      this.errorMessage = 'Veuillez choisir un nombre entre 2 et 20.';
      this.randomVerbs = []; // Réinitialiser la liste en cas d'erreur
      return;
    }

    const token = localStorage.getItem('userToken'); // Récupérer le token depuis le localStorage

    if (!token) {
      this.errorMessage = 'Utilisateur non authentifié.';
      return;
    }

    this.verbService.getRandomVerbs(this.numberOfVerbs, token).subscribe(
      verbs => {
        this.randomVerbs = verbs; // Mettre à jour la liste des verbes aléatoires
        this.errorMessage = ''; // Réinitialiser le message d'erreur
      },
      error => {
        console.error('Erreur lors de la récupération des verbes', error);
        this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer.';
      }
    );
  }
}