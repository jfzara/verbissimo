import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VerbListComponent } from './verb-list/verb-list.component';

@NgModule({
  declarations: [
    VerbListComponent // Déclarez uniquement les composants non autonomes
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VerbListComponent // Exportez uniquement les composants non autonomes
  ]
})
export class VerbModule { }