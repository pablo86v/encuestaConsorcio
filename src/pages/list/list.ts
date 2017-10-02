import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Votacion } from '../../entidades/votacion';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  objVotacion: Votacion;
  items: any[];
  cantVotoMacetas: number = 0;
  cantVotoMatafuegos: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.getVotacion();
    this.getResults();
  }


  getVotacion() {
    this.data.getItems().subscribe(
      datos => this.items = datos,
      error => console.error(error),
      () => console.log("ok")
    );
  }


  getResults() {
    for (let item of this.items) {
      if (item.voto == "maceta") {
        this.cantVotoMacetas += 1;
      } else if (item.voto == "matafuegos") {
        this.cantVotoMatafuegos += 1;
      }
    }
  }





}//class
