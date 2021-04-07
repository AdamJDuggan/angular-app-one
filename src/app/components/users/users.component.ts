import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UsersService } from '../../services/users.service';

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
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getData().subscribe((data) => {
      console.log(data);
    });

    this.usersService.getUsers().subscribe((users) => {
      this.loaded = true;
      this.users = users;
    });
  }

  fireEvent(e) {
    console.log(e.target.value);
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      alert('FORM NOT VALID');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.usersService.addUser(value);
      this.form.reset();
    }
  }
}
