import { Component } from '@angular/core';
import { VerbService } from '../services/verb.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verb-random',
  standalone: true,
  templateUrl: './verb-random.component.html',
  styleUrls: ['./verb-random.component.css'],
  imports: [CommonModule, FormsModule]
})
export class VerbRandomComponent {
  numberOfVerbs: number = 2;
  randomVerbs: string[] = [];
  errorMessage: string = '';

  constructor(public verbService: VerbService, public router: Router) {}

  getRandomVerbs() {
    if (this.numberOfVerbs < 2 || this.numberOfVerbs > 20) {
      this.errorMessage = 'Veuillez choisir un nombre entre 2 et 20.';
      this.randomVerbs = [];
      return;
    }

    const token = localStorage.getItem('userToken');

    if (!token) {
      this.errorMessage = 'Utilisateur non authentifié.';
      return;
    }

    this.verbService.getRandomVerbs(this.numberOfVerbs, token).subscribe(
      verbs => {
        this.randomVerbs = verbs;
        this.errorMessage = '';
      },
      error => {
        console.error('Erreur lors de la récupération des verbes', error);
        this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer.';
      }
    );
  }
}
