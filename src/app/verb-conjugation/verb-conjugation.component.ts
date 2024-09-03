import { Component, Input, OnInit } from '@angular/core';
import { VerbService } from '../../app/services/verb.service';
import { CommonModule } from '@angular/common'; // Importation de CommonModule

@Component({
  selector: 'app-verb-conjugation',
  standalone: true,
  imports: [CommonModule], // Ajoutez CommonModule ici
  templateUrl: './verb-conjugation.component.html',
  styleUrls: ['./verb-conjugation.component.css']
})
export class VerbConjugationComponent implements OnInit {
  @Input() verb?: string; // Le verbe dont nous voulons afficher la conjugaison, maintenant optionnel
  verbInfo: any; // Pour stocker les informations du verbe récupérées
  errorMessage: string = '';

  constructor(private verbService: VerbService) {}

  ngOnInit() {
    this.fetchConjugaison();
  }

  fetchConjugaison() {
    const token = localStorage.getItem('userToken'); // Récupérer le token depuis le localStorage
    if (!token) {
      this.errorMessage = 'Le token est manquant. Veuillez vous authentifier.';
      return;
    }

    if (this.verb) { // Vérifiez que le verbe est défini avant de faire la requête
      this.verbService.getVerbs(this.verb, token).subscribe(
        (data) => {
          this.verbInfo = data; // Stocke les données récupérées
        },
        (error) => {
          console.error('Erreur lors de la récupération des informations du verbe:', error);
          this.errorMessage = 'Erreur lors de la récupération des informations.';
        }
      );
    } else {
      this.errorMessage = 'Aucun verbe spécifié.';
    }
  }
}