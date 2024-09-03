import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VerbService } from '../../app/services/verb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verb-search',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './verb-search.component.html',
  styleUrls: ['./verb-search.component.css']
})
export class VerbSearchComponent {
  verb: string = '';
  verbInfo: any;

  constructor(private verbService: VerbService, private router: Router) { }

  searchVerb() {
    const token = localStorage.getItem('userToken') ?? ''; // Utilisez une chaîne vide si le token est null

    if (!token) {
      console.error('Le token est manquant. Veuillez vous authentifier.');
      return; // Arrêtez l'exécution si le token est vide
    }

    this.verbService.getVerbs(this.verb, token).subscribe(
      (data) => {
        this.verbInfo = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations du verbe:', error);
      }
    );
  }

  // Méthode pour retourner à la page de choix
  goToChoicePage() {
    this.router.navigate(['/choice']); // Remplacez '/choice' par le chemin de votre page de choix
  }
}