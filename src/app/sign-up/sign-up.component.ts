import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [AuthService]
})
export class SignUpComponent {
  email: string = '';
  name: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  @Output() signedUp = new EventEmitter<void>();

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signUp(this.email, this.name, this.password).subscribe(
      response => {
        console.log('Inscription réussie', response);
        localStorage.setItem('userName', this.name);
        this.successMessage = "Inscription réussie ! Vous pouvez maintenant vous connecter.";
        this.errorMessage = '';
        this.signedUp.emit();
      },
      error => {
        this.errorMessage = "Erreur lors de l'inscription. Veuillez réessayer.";
        console.error(this.errorMessage, error);
        this.successMessage = '';
        this.email = '';
        this.name = '';
        this.password = '';
      }
    );
  }

  redirectToLogin() {
    this.router.navigate(['/']);
  }
}