import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { VerbService } from '../../app/services/verb.service'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { VerbConjugationComponent } from '../../app/verb-conjugation/verb-conjugation.component';

@Component({
  selector: 'app-verb-list',
  standalone: true,
  templateUrl: './verb-list.component.html',
  styleUrls: ['./verb-list.component.css'],
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, CommonModule, FormsModule, VerbConjugationComponent] 
})
export class VerbListComponent {
  numberOfVerbs: number = 2;
  randomVerbs: string[] = [];
  selectedVerb?: string;
  errorMessage: string = '';

  constructor(private verbService: VerbService, private router: Router) {}

  fetchRandomVerbs() {
    if (this.numberOfVerbs < 2 || this.numberOfVerbs > 20) {
      this.errorMessage = 'Veuillez choisir un nombre entre 2 et 20.';
      this.randomVerbs = [];
      return;
    }

    const token = localStorage.getItem('userToken');

    if (!token) {
      this.errorMessage = 'Le token est manquant. Veuillez vous authentifier.';
      return;
    }

    this.verbService.getRandomVerbs(this.numberOfVerbs, token).subscribe(
      (response: { verbs: string[] }) => {
        this.randomVerbs = response.verbs;
        this.errorMessage = '';
        this.selectedVerb = undefined;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des verbes', error);
        this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer.';
      }
    );
  }

  goToChoicePage() {
    this.router.navigate(['/choice']); 
  }
}