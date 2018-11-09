import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PessoaModel } from '../../model/pessoa.model';
import { StreamProvider } from '../../providers/stream/stream';

@IonicPage({name: "pessoa-page"})
@Component({
  selector: 'page-pessoa',
  templateUrl: 'pessoa.html',
})
export class PessoaPage {

  pessoas: Array<PessoaModel>

  constructor(
    private stream: StreamProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.pessoas = new Array<PessoaModel>()
    this.stream.listen("list").subscribe((res:Array<PessoaModel>)=>{
      //console.log("list pessoas")
      this.pessoas = new Array<PessoaModel>()
      res.forEach(pessoa=>{
        this.pessoas.push(pessoa)
      })
    })
  }

  create(){
    this.navCtrl.push("pessoa-crud-page")
  }

  delete(pessoa: PessoaModel){
    this.stream.send("delete", pessoa)
    this.stream.listen("delete").subscribe(data=>{
      console.log(data)
    })
  }
}
