import { Component } from '@angular/core';
import { VerbService } from '../../app/services/verb.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Assurez-vous d'importer CommonModule
import { VerbConjugationComponent } from '../../app/verb-conjugation/verb-conjugation.component'; // Chemin correct
import { FormsModule } from '@angular/forms'; // Ajoutez cette ligne


@Component({
  selector: 'app-verb-list',
  standalone: true, // Assurez-vous que ce composant est autonome
  templateUrl: './verb-list.component.html',
  styleUrls: ['./verb-list.component.css'],
  imports: [CommonModule, VerbConjugationComponent, FormsModule ] // Ajoutez les imports ici
})
export class VerbListComponent {
  numberOfVerbs: number = 2; // Valeur par défaut
  randomVerbs: string[] = [];
  selectedVerb?: string; // Le verbe sélectionné par l'utilisateur
  errorMessage: string = '';

  constructor(private verbService: VerbService, private router: Router) {}

  fetchRandomVerbs() {
    console.log('fetchRandomVerbs called with:', this.numberOfVerbs);

    if (this.numberOfVerbs < 2 || this.numberOfVerbs > 20) {
      this.errorMessage = 'Veuillez choisir un nombre entre 2 et 20.';
      this.randomVerbs = []; // Réinitialiser la liste en cas d'erreur
      console.log(this.errorMessage);
      return;
    }

    const token = localStorage.getItem('userToken'); // Récupérer le token depuis le localStorage
    console.log('Token:', token);

    if (!token) {
      this.errorMessage = 'Le token est manquant. Veuillez vous authentifier.';
      console.log(this.errorMessage);
      return;
    }

    // Appeler le service pour obtenir des verbes aléatoires
    this.verbService.getRandomVerbs(this.numberOfVerbs, token).subscribe(
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
}