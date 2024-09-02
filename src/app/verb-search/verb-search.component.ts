import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import du FormsModule pour ngModel
import { CommonModule } from '@angular/common'; // Import du CommonModule pour les pipes comme json
import { HttpClientModule } from '@angular/common/http';
import { VerbService } from '../services/verb.service'; // Importation du service
import { Router } from '@angular/router'; // Pour la navigation

@Component({
  selector: 'app-verb-search',
  standalone: true, // Indique que ce composant est autonome
  imports: [FormsModule, CommonModule, HttpClientModule], // Importation des modules nécessaires
  templateUrl: './verb-search.component.html',
  styleUrls: ['./verb-search.component.css']
})
export class VerbSearchComponent {
  verb: string = ''; // Pour stocker le verbe entré par l'utilisateur
  verbInfo: any; // Pour stocker les informations du verbe récupérées

  constructor(private verbService: VerbService, private router: Router) { }

  // Méthode pour rechercher le verbe
  searchVerb() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpmemFyYXRlc3RAZ21haWwuY29tIiwidWlkIjoiNjZkNTM0ODUyNmZjNmRmMmIxMTZjZjc2IiwiZXhwIjoxNzI3ODgyODM2fQ.C6Ea-CZxUCR5Z19aaZ1BLDkWicmI10lKJHOrXqVM5mU'; // Votre token JWT

    this.verbService.getVerbs(this.verb, token).subscribe(
      (data) => {
        this.verbInfo = data; // Stocke les données récupérées
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations du verbe:', error);
      }
    );
  }
}