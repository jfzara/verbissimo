import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { VerbModule } from '../verb/verb.module'; // Importation du module VerbModule

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    VerbModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule { }