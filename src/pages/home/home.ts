import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';
import { Usuario } from '../../entidades/usuario';
import { Votacion } from '../../entidades/votacion';

//Providers
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DataProvider } from '../../providers/data/data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  items: any[];
  objUsuario: Usuario;
  objVotacion: Votacion;


  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public appCtrl:
    App, public data: DataProvider) {

    this.getVotacion();
    this.objVotacion = new Votacion
  }

  getVotacion() {

    this.data.getItems().subscribe(
      datos => console.info(this.items = datos),
      error => console.error(error),
      () => console.log("ok")
    );
  }


  votar(voto) {

     this.objVotacion.usuario = localStorage.getItem("usuario");
     this.objVotacion.voto = voto;

    // let aux = "{\"usuario\":\"" + localStorage.getItem("usuario") + "\",\"voto\":\"" + voto + "\"}";

      
     this.data.setItem(this.objVotacion);

  }


}//class
