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
  @Input() verb?: string;
  verbInfo: any;
  errorMessage: string = '';

  constructor(private verbService: VerbService) {}

  ngOnInit() {
    this.fetchConjugaison();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['verb'] && !changes['verb'].firstChange) {
      this.fetchConjugaison();
    }
  }

  fetchConjugaison() {
    const token = localStorage.getItem('userToken');
    if (!token) {
      this.errorMessage = 'Le token est manquant. Veuillez vous authentifier.';
      return;
    }

    if (this.verb) {
      this.verbService.getVerbs(this.verb, token).subscribe(
        (data) => {
          this.verbInfo = data;
          this.errorMessage = '';
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