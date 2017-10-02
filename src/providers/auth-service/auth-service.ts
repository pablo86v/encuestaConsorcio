
import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AuthServiceProvider {

 usuario:string;
 items: FirebaseListObservable<any[]>;

  constructor(public http: Http,public db: AngularFireDatabase) {
   
    
  }


public setItem(){
   this.items.push({usuario:this.usuario}); 
 }


public getItems(){
  this.items = this.db.list('/usuarios');
 
  return this.items;
}

}//class



