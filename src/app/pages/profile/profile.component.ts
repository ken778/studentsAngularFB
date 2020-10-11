import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(public _data: DatabaseService, public _route: ActivatedRoute) {}

  //variable
  Student: any;
  Ref: any;
  studentForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    address: new FormControl(''),
    contact: new FormControl(''),
    course: new FormControl(''),
  });

  //delete student
  DeleteStu(ref) {
    this._data.DeleteStudent(ref);
  }
  ngOnInit() {
    //get Student id
    this.Ref = this._route.snapshot.paramMap.get('ref');
    console.log('Id:', this.Ref);

    //geting single student info
    this.Student = this._data.getStudentInfo(this.Ref).subscribe((i) => {
      this.Student = i;
      console.log(this.Student);
    });
  }
}
