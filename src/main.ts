import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Importation de BrowserModule
import { HttpClientModule } from '@angular/common/http';
import { VerbModule } from './verb/verb.module'; // Importation du module VerbModule
import { AppRoutingModule } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule), // Correction : ajout de l'import pour BrowserModule
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(VerbModule),
    importProvidersFrom(AppRoutingModule), provideAnimationsAsync()
  ]
}).catch(err => console.error(err));