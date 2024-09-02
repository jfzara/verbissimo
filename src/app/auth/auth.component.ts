import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [LoginComponent, SignUpComponent, CommonModule]  // Importez les composants standalone ici
})
export class AuthComponent {
  showLogin: boolean = true; // Par défaut, afficher le formulaire de connexion

  // Bascule entre le formulaire de connexion et le formulaire d'inscription
  toggleForm() {
    this.showLogin = !this.showLogin;
  }
}
