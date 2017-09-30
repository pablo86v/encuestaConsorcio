
import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  votacion:string;
 items: FirebaseListObservable<any[]>;

  constructor(public http: Http,public db: AngularFireDatabase) {
    console.log('Hello DataProvider Provider');
    
  }


public setItem(votacion){
   this.items.push({votacion:votacion});
   
 }

public getItems(){
  this.items = this.db.list('/votacion');
 
  return this.items;
}

}//class



