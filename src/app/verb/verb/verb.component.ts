import { Component } from '@angular/core';
import { VerbService } from '../../services/verb.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verb',
  standalone: true,
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.css'],
  imports: [CommonModule, FormsModule]
})
export class VerbComponent {
  numberOfVerbs: number = 2; // Valeur par défaut
  randomVerbs: string[] = [];
  selectedVerb?: string; // Le verbe sélectionné par l'utilisateur
  errorMessage: string = '';
  conjugation: any; // Déclaration de la variable pour stocker la conjugaison
  token: string | null; // Déclaration de la variable pour le token

  constructor(public verbService: VerbService, public router: Router) {
    this.token = localStorage.getItem('userToken'); // Récupérer le token depuis le localStorage
  }

  fetchRandomVerbs() {
    console.log('fetchRandomVerbs called with:', this.numberOfVerbs);

    if (this.numberOfVerbs < 2 || this.numberOfVerbs > 20) {
      this.errorMessage = 'Veuillez choisir un nombre entre 2 et 20.';
      this.randomVerbs = []; // Réinitialiser la liste en cas d'erreur
      console.log(this.errorMessage);
      return;
    }

    if (!this.token) {
      this.errorMessage = 'Le token est manquant. Veuillez vous authentifier.';
      console.log(this.errorMessage);
      return;
    }

    // Appeler le service pour obtenir des verbes aléatoires
    this.verbService.getRandomVerbs(this.numberOfVerbs, this.token).subscribe(
      response => {
        console.log('Verbes récupérés:', response);
        this.randomVerbs = response.verbs; // Assurez-vous d'accéder à la bonne propriété
        this.errorMessage = ''; // Réinitialiser le message d'erreur
        this.selectedVerb = undefined; // Réinitialiser le verbe sélectionné
      },
      error => {
        console.error('Erreur lors de la récupération des verbes', error);
        this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer.';
      }
    );
  }

  showConjugation(verb: string) {
    if (!this.token) {
      this.errorMessage = 'Utilisateur non authentifié.';
      return;
    }

    this.verbService.getConjugation(verb, this.token).subscribe(
      data => {
        this.conjugation = data; // Stocker la conjugaison
        console.log(this.conjugation); // Vous pouvez afficher cela dans un modal ou un encadré
      },
      error => {
        console.error('Erreur lors de la récupération de la conjugaison', error);
        this.errorMessage = 'Une erreur s\'est produite lors de la récupération de la conjugaison.';
      }
    );
  }
}g