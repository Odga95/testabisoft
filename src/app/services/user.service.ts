import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) {
  }

  addUser(user: any): Promise<any> {
    return this.firestore.collection('users').add(user);
  }

  getUser(): Observable<any> {
    return this.firestore.collection('users').snapshotChanges();
  }
}
