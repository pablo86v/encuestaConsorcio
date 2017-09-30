import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Componentes ionic
import { App, ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { Usuario } from '../../entidades/usuario';

//Providers
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  items: any[];
  contrasenia: string;
  objUsuario: Usuario;


  constructor(public navCtrl: NavController, public appCtrl: App, public viewCtrl: ViewController,
    public navParams: NavParams, public auservice: AuthServiceProvider, public toastCtrl: ToastController) {
    this.getUsers();
    this.objUsuario = new Usuario();
    this.contrasenia = "";
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


  selectUser(valor) {
    for (let user of this.items) {
      if (user.nombre == valor) {
        this.objUsuario = user;
        this.contrasenia = user.clave;
      }
    }
    localStorage.setItem("usuario", this.objUsuario.nombre);
  }//selectUser


  getUsers() {
    this.auservice.getItems().subscribe(
      datos => this.items = datos,
      error => console.error(error),
      () => console.log("ok")
    );
  }


  pushPage() {
    this.navCtrl.push(HomePage);
  }


  validateUser() {
    if (this.contrasenia != this.objUsuario.clave || this.contrasenia == "") {
      this.presentToast("Contraseña inválida");
    }
    else {
      this.pushPage();
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


}//class

