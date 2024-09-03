import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { VerbService } from '../../app/services/verb.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verb-conjugation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verb-conjugation.component.html',
  styleUrls: ['./verb-conjugation.component.css']
})
export class VerbConjugationComponent implements OnInit, OnChanges {
  @Input() verb?: string; // Le verbe dont nous voulons afficher la conjugaison
  verbInfo: any; // Pour stocker les informations du verbe récupérées
  errorMessage: string = '';

  constructor(private verbService: VerbService) {}

  ngOnInit() {
    this.fetchConjugaison(); // Appel initial pour récupérer les données
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['verb'] && !changes['verb'].firstChange) {
      this.fetchConjugaison(); // Récupérer la conjugaison chaque fois que le verbe change
    }
  }

  fetchConjugaison() {
    const token = localStorage.getItem('userToken'); // Récupérer le token depuis le localStorage
    if (!token) {
      this.errorMessage = 'Le token est manquant. Veuillez vous authentifier.';
      return;
    }

    if (this.verb) {
      this.verbService.getVerbs(this.verb, token).subscribe(
        (data) => {
          this.verbInfo = data; // Stocke les données récupérées
          this.errorMessage = ''; // Réinitialiser le message d'erreur
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
 