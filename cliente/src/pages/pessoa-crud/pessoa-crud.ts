import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PessoaModel } from '../../model/pessoa.model';
import { StreamProvider } from '../../providers/stream/stream';

@IonicPage({name: "pessoa-crud-page"})
@Component({
  selector: 'page-pessoa-crud',
  templateUrl: 'pessoa-crud.html',
})
export class PessoaCrudPage {

  pessoa: PessoaModel

  constructor(
    private stream: StreamProvider,
    public navCtrl: NavController, public navParams: NavParams) {
      this.pessoa = new PessoaModel()
  }

  salvar(){
    this.stream.send("add", this.pessoa)
    this.stream.listen("add").subscribe(data=>{
      console.log(data)
    })
    this.navCtrl.pop()
  }
}
