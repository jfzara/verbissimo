import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice-page',
  templateUrl: './choice-page.component.html',
  styleUrls: ['./choice-page.component.css']
})
export class ChoicePageComponent {
  constructor(private router: Router) {}

  searchVerb() {
    this.router.navigate(['/verb-search']); // Route pour rechercher un verbe
  }

  searchRandomVerbs() {
    this.router.navigate(['/verb-list']); // Route pour la liste aléatoire de verbes
  }
}