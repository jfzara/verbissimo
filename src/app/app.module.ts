import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { VerbModule } from '../verb/verb.module'; // Importation du module VerbModule
import { FormsModule } from '@angular/forms'; // Importation de FormsModule


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Ajoutez FormsModule ici
    VerbModule,
    AppRoutingModule
  ],
  providers: [],
  
})
export class AppModule { }