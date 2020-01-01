import { Injectable } from "@angular/core";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import "rxjs/add/operator/switchMap";
import { map } from "rxjs/operators";
// import{User,Products}from "../models/model";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  user: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user = this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    });
  }
  async signin() {
    const provider = new auth.GoogleAuthProvider();
    const cred = await this.afAuth.auth.signInWithPopup(provider);
    return this.createUserData(cred.user);
  }

  async logout() {
    await this.afAuth.auth.signOut();
  }
  private createUserData(user: firebase.User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    const data: User = {
      uid: user.uid,
      email: user.email,
      name: user.displayName
    };
    return userRef.set(data, { merge: true });
  }

  fetchProducts(): Observable<firebase.firestore.DocumentData[]> {
    var docs = this.afs
      .collection("users")
      .doc(this.afAuth.auth.currentUser.uid)
      .collection("cart")
      .valueChanges();
    return docs;
  }
}
