import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app.routes';
import { VerbSearchComponent } from './verb-search/verb-search.component'; 

@NgModule({
  declarations: [
    VerbSearchComponent // Déclaration du composant VerbSearchComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, // Importation de FormsModule pour utiliser ngModel
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }