import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'Chun',
        lastName: 'Li',
        email: 'chunLi@gmail.com',
        isActive: true,
        registered: new Date(`01/02/2018 08:30:00`),
        hide: true,
      },
      {
        firstName: 'Blanka',
        lastName: 'Unknown',
        email: 'blanka@gmail.com',
        isActive: false,
        registered: new Date(`03/11/2017 06:20:00`),
        hide: true,
      },
      {
        firstName: 'Karin',
        lastName: 'Kanzuki',
        email: 'karin@gmail.com',
        isActive: true,
        registered: new Date(`11/02/2016 10:33:00`),
        hide: true,
      },
    ];

    this.loaded = true;
  }

  fireEvent(e) {
    console.log(e.target.value);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('123');
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }
}
