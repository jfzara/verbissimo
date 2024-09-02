import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component'; // Importez votre composant SignUp
import { AuthComponent } from './auth/auth.component';
import { VerbSearchComponent } from './verb-search/verb-search.component'; // Importez votre composant VerbSearch

export const routes: Routes = [
  { path: '', component: AuthComponent }, // Page d'accueil par défaut
  { path: 'sign-up', component: SignUpComponent }, // Route pour le composant SignUp
  { path: 'verb-search', component: VerbSearchComponent }, // Route pour la recherche de verbes
  { path: '**', redirectTo: '' } // Redirection pour toutes les routes non définies
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }