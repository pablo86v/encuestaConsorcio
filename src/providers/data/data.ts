
import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class DataProvider {

  votacion: string;
  items: FirebaseListObservable<any[]>;

  constructor(public http: Http, public db: AngularFireDatabase) {

  }


  public setItem(votacion) {
    this.items.push(votacion);
  }


  
  public getItems() {
    this.items = this.db.list('/votacion');
    return this.items;
  }


}//class



