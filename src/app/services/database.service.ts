import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(public _fire: AngularFirestore, public route: Router) {}

  Adduser(data) {
    return this._fire
      .collection('Users')
      .add(data)
      .then((results) => {
        alert('Added Successful!');
      })
      .catch((err) => {
        console.log('couldnt add user:', err);
      });
  }
  //get Student
  GetUsers() {
    return this._fire.collection('Users');
  }
  //get single student data
  getStudentInfo(ref) {
    return this._fire.collection('Users').doc(ref).valueChanges();
  }
  //delete function
  DeleteStudent(ref) {
    return this._fire
      .collection('Users')
      .doc(ref)
      .delete()
      .then((results) => {
        this.route.navigate(['/landing']);
      })
      .catch((err) => {
        console.log('error occured, ', err);
      });
  }
  //update function
  UpdateStudentInfo(ref, record) {
    return this._fire.collection('Users').doc(ref).update(record);
  }
}
