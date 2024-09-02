import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component'; // Importez votre composant SignUp
import { AuthComponent } from './auth/auth.component';


export const routes: Routes = [
  { path: '', component: AuthComponent }, // Page d'accueil par défaut
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' }, // Redirection par défaut vers la page d'inscription
  { path: 'sign-up', component: SignUpComponent } // Route pour le composant SignUp
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }