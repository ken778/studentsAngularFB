import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(public _data: DatabaseService, public _route: ActivatedRoute) {}

  //variable
  Student: any;
  students: any;
  Ref: any;
  studentForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    address: new FormControl(''),
    contact: new FormControl(''),
    course: new FormControl(''),
  });

  //updating student details
  AddUsers(UserData: NgForm) {
    this.Ref = this._route.snapshot.paramMap.get('ref');

    this._data.UpdateStudentInfo(this.Ref, UserData.value);
  }

  //delete student
  DeleteStu() {
    this.Ref = this._route.snapshot.paramMap.get('ref');
    this._data.DeleteStudent(this.Ref);
  }
  //update student

  ngOnInit() {
    //get Student id
    this.Ref = this._route.snapshot.paramMap.get('ref');
    console.log('Id:', this.Ref);

    //geting single student info
    this.Student = this._data.getStudentInfo(this.Ref).subscribe((i) => {
      this.Student = i;
      console.log(this.Student);
    });

    //return Students
    this._data
      .GetUsers()
      .snapshotChanges()
      .subscribe((action) => {
        console.log(action);
        this.students = action;
      });
  }
}
