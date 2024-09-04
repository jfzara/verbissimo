import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    SignUpComponent,
    MatCardModule
  ]
})
export class AuthComponent {
  showLogin: boolean = true;
  isLoggedIn: boolean = false;
  isSignedUp: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isLoggedIn(); 
  }

  toggleForm() {
    this.showLogin = !this.showLogin;
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/']);
    const loginComponent = new LoginComponent(this.authService, this.router);
    loginComponent.clearFields(); 
  }

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.authService.setToken(response.token);
        this.isLoggedIn = true;
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Erreur de connexion:', error);
      }
    });
  }

  handleSignUp() {
    this.showLogin = true;
    this.isSignedUp = true;
    this.isLoggedIn = true;
    this.router.navigate(['/']);
  }
}