import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VerbRandomComponent } from '../app/verb-random/verb-random.component'; // Non autonome
import { VerbListComponent } from './verb-list/verb-list.component'; // Composant autonome

@NgModule({
  declarations: [], // Pas de déclarations ici pour les composants autonomes
  imports: [
    CommonModule,
    FormsModule,
    VerbRandomComponent // Composant non autonome
    // Ne déclarez pas VerbListComponent ici, car il est autonome
  ],
  exports: [
    VerbRandomComponent // Exporter également le composant non autonome
    // Ne pas exporter VerbListComponent ici, car il doit être importé là où nécessaire
  ]
})
export class VerbModule {}