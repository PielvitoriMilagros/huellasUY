import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';

// import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  
  constructor(private firestore:AngularFirestore) { }


  getAnimales(){
    return this.firestore.collection("animales").snapshotChanges();
  }




}
