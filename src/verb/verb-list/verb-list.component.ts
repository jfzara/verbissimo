import { Component } from '@angular/core'; // Importation de Component pour créer un composant
import { VerbService } from '../../app/services/verb.service'; // Importation du service VerbService
import { Observable } from 'rxjs';

@Component({
  selector: 'app-verb-list', // Sélecteur du composant pour l'utiliser dans les templates
  templateUrl: './verb-list.component.html', // Chemin vers le fichier HTML du composant
  styleUrls: ['./verb-list.component.css'] // Chemin vers le fichier CSS pour le style du composant
})
export class VerbListComponent {
  verbs: any[] = []; // Tableau pour stocker les verbes récupérés
  randomVerbs: any[] = []; // Tableau pour stocker les verbes aléatoires récupérés
  verb: string = ''; // Variable pour stocker le verbe entré par l'utilisateur
  token: string = ''; // Ajout d'une variable pour stocker le token d'authentification

  constructor(private verbService: VerbService) {} // Injection de VerbService dans le constructeur

  // Méthode pour récupérer tous les verbes basés sur l'entrée de l'utilisateur
  fetchAllVerbs() {
    if (!this.verb || !this.token) {
      console.error('Le verbe ou le token est manquant.');
      return;
    }
    
    this.verbService.getVerbs(this.verb, this.token).subscribe(
      (data: any) => {
        this.verbs = data; // Stockage des verbes récupérés dans le tableau
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des verbes:', error); // Gestion des erreurs
      }
    );
  }

  // Méthode pour récupérer un nombre spécifié de verbes aléatoires
  fetchRandomVerbs(quantity: number) {
    if (!this.token) {
      console.error('Le token est manquant.');
      return;
    }
    
    this.verbService.getRandomVerbs(quantity, this.token).subscribe(
      (data: any) => {
        this.randomVerbs = data; // Stockage des verbes aléatoires récupérés dans le tableau
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des verbes aléatoires:', error); // Gestion des erreurs
      }
    );
  }
}
