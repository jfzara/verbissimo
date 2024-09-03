import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes'; // Assurez-vous que le chemin est correct
import { AppComponent } from './app.component'; // Assurez-vous que vous importez votre composant principal
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// Importation des composants autonomes
import { VerbListComponent } from './verb/verb-list/verb-list.component';
import { VerbRandomComponent } from './verb/verb-random/verb-random.component';

@NgModule({
  declarations: [
    AppComponent // Déclarez ici votre composant principal
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    VerbListComponent, // Ajoutez ici le composant autonome
    VerbRandomComponent // Ajoutez également ici le composant autonome
  ],
  providers: [],
  bootstrap: [AppComponent] // Démarrez avec votre composant principal
})
export class AppModule {}