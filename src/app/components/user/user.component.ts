import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // Properties on a class
  user: User;

  // Methods
  //Consturcutr runs automatially when component is initilised
  // Construcotr is mainly used to inject dependancies
  constructor() {}
  ngOnInit(): void {
    this.user = {
      firstName: 'Chun',
      lastName: 'Li',
      email: '',
    };
  }
}
