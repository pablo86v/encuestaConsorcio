import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

// Entidades
import { Usuario } from '../../entidades/usuario';
import { Votacion } from '../../entidades/votacion';

// Pages
import { ListPage } from '../../pages/list/list';
import { LoginPage } from '../../pages/login/login';

//Providers
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
    App, public data: DataProvider, public toastCtrl: ToastController) {

    this.getVotacion();
    this.objVotacion = new Votacion();
   }

   presentToast(textToShow) {
    const toast = this.toastCtrl.create({
      message: textToShow,
      duration: 2000,
      position: 'middle'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  getVotacion() {
    this.data.getItems().subscribe(
      datos => this.items = datos,
      error => console.error(error),
      () => console.log("ok")
    );
  }


  votar(voto) {
    if(this.validateUser()){
      this.objVotacion.usuario = localStorage.getItem("usuario");
      this.objVotacion.voto = voto;
    
      this.data.setItem(this.objVotacion);
      this.navCtrl.push(ListPage);
    }
  }

  validateUser():boolean{
    let result : boolean = true;
    for (let item of this.items) {
      if (item.usuario ==  localStorage.getItem("usuario")){
        this.presentToast("El usuario ya emitió su voto.");
        result = false;
        break;
      }
    }
    return result;  
  }

 

}//class
