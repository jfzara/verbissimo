import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card'; // Ajout de MatCardModule
import { MatInputModule } from '@angular/material/input'; // Ajout de MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Ajout de MatButtonModule

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    HttpClientModule,
    MatCardModule, // Ajoutez MatCardModule ici
    MatInputModule, // Ajoutez MatInputModule ici
    MatButtonModule // Ajoutez MatButtonModule ici
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [AuthService]
})
export class SignUpComponent {
  email: string = '';
  name: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signUp(this.email, this.name, this.password).subscribe(
      response => {
        console.log('Inscription réussie', response);
        localStorage.setItem('userName', this.name);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Erreur lors de l\'inscription', error);
      }
    );
  }
}