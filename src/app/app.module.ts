import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// Importation des composants
import { VerbListComponent } from '../verb/verb-list/verb-list.component';
import { VerbRandomComponent } from './verb-random/verb-random.component';
import { VerbSearchComponent } from '../verb/verb-search/verb-search.component'; // Ajouté ici

@NgModule({
  declarations: [
    AppComponent,
    VerbListComponent,
    VerbRandomComponent,
    VerbSearchComponent, // Ajouté ici
    // AuthComponent, // Retiré de ici
    // SignUpComponent, // Retiré de ici
    // LoginComponent // Retiré de ici
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}