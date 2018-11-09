import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PessoaCrudPage } from './pessoa-crud';

@NgModule({
  declarations: [
    PessoaCrudPage,
  ],
  imports: [
    IonicPageModule.forChild(PessoaCrudPage),
  ],
})
export class PessoaCrudPageModule {}
