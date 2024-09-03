import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component'; // Importez votre composant SignUp
import { AuthComponent } from './auth/auth.component';
import { VerbSearchComponent } from '../verb/verb-search/verb-search.component'; // Importez votre composant VerbSearch
import { VerbListComponent } from '../verb/verb-list/verb-list.component'; // Importez votre composant VerbList
import { ChoicePageComponent } from './choice-page/choice-page.component'; // Importez le nouveau composant ChoicePage

const routes: Routes = [
  { path: '', component: AuthComponent }, // Page d'accueil par défaut
  { path: 'sign-up', component: SignUpComponent }, // Route pour le composant SignUp
  { path: 'verb-search', component: VerbSearchComponent }, // Route pour la recherche de verbes
  { path: 'verb-list', component: VerbListComponent }, // Route pour la liste aléatoire de verbes
  { path: 'choice', component: ChoicePageComponent }, // Route pour la page de choix
  { path: '**', redirectTo: '' } // Redirection pour toutes les routes non définies
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }