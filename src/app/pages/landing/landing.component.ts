import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(public _data: DatabaseService) {}

  //variables
  students: any;
  AddUsers(UserData: NgForm) {
    this._data.Adduser(UserData.value);
  }

  ngOnInit() {
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
