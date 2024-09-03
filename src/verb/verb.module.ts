import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VerbListComponent } from './verb-list/verb-list.component';
import { VerbRandomComponent } from '../app/verb-random/verb-random.component';


@NgModule({
  declarations: [
    VerbListComponent,
    VerbRandomComponent // Déclarez ici le composant qui utilise ngModel
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VerbListComponent,
    VerbRandomComponent // Exportez le composant si nécessaire
  ]
})
export class VerbModule { }