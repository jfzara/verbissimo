import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthComponent } from './auth/auth.component';
import { VerbSearchComponent } from '../verb/verb-search/verb-search.component';
import { VerbListComponent } from '../verb/verb-list/verb-list.component';
import { ChoicePageComponent } from './choice-page/choice-page.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'verb-search', component: VerbSearchComponent },
  { path: 'verb-list', component: VerbListComponent },
  { path: 'choice', component: ChoicePageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }