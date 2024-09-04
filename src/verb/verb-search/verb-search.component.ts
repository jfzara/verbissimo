import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VerbService } from '../../app/services/verb.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-verb-search',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './verb-search.component.html',
  styleUrls: ['./verb-search.component.css']
})
export class VerbSearchComponent {
  verb: string = '';
  verbInfo: any;

  constructor(private verbService: VerbService, private router: Router) {}

  searchVerb() {
    const token: string = localStorage.getItem('userToken') ?? ''; // Fournit une valeur par défaut
  
    this.verbService.getVerbs(this.verb, token).subscribe(
      (data) => {
        this.verbInfo = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations du verbe:', error);
      }
    );
  }

 
  goToChoicePage() {
    this.router.navigate(['/choice']);
  }
}
