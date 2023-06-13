import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(public firestore: AngularFirestore,
    public auth: AngularFireAuth) { }

  loginWithEmail(data: any) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  signup(data: any) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  saveDetails(data1: any) {
    return this.firestore.collection('users').doc(data1.uid).set(data1);
  }
  getDetails(data: any) {
    return this.firestore.collection('users').doc(data.uid).valueChanges();
  }
}
