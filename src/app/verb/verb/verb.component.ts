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
  numberOfVerbs: number = 2;
  randomVerbs: string[] = [];
  selectedVerb?: string;
  errorMessage: string = '';
  conjugation: any;
  token: string | null;

  constructor(public verbService: VerbService, public router: Router) {
    this.token = localStorage.getItem('userToken');
  }

  fetchRandomVerbs() {
    console.log('fetchRandomVerbs called with:', this.numberOfVerbs);

    if (this.numberOfVerbs < 2 || this.numberOfVerbs > 20) {
      this.errorMessage = 'Veuillez choisir un nombre entre 2 et 20.';
      this.randomVerbs = [];
      console.log(this.errorMessage);
      return;
    }

    if (!this.token) {
      this.errorMessage = 'Le token est manquant. Veuillez vous authentifier.';
      console.log(this.errorMessage);
      return;
    }

    this.verbService.getRandomVerbs(this.numberOfVerbs, this.token).subscribe(
      response => {
        console.log('Verbes récupérés:', response);
        this.randomVerbs = response.verbs;
        this.errorMessage = '';
        this.selectedVerb = undefined;
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
        this.conjugation = data;
        console.log(this.conjugation);
      },
      error => {
        console.error('Erreur lors de la récupération de la conjugaison', error);
        this.errorMessage = 'Une erreur s\'est produite lors de la récupération de la conjugaison.';
      }
    );
  }
}