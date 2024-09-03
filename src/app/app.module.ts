import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes'; // Assurez-vous que le chemin est correct
import { VerbModule } from '../verb/verb.module'; // Ajoutez ici l'import de votre module Verb
import { AppComponent } from './app.component'; // Assurez-vous que vous importez votre composant principal

@NgModule({
  declarations: [
    AppComponent // Déclarez ici votre composant principal
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    VerbModule, // Votre module qui peut contenir d'autres composants
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Démarrez avec votre composant principal
})
export class AppModule {}