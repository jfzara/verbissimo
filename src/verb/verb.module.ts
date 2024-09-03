import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VerbRandomComponent } from '../app/verb-random/verb-random.component'; // Composant autonome
import { VerbListComponent } from './verb-list/verb-list.component'; // Composant autonome

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
 
  ]
})
export class VerbModule {}