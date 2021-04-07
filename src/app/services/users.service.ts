import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[];
  data: Observable<any>;

  constructor() {
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
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  addUser(user: User) {
    this.users.unshift(user);
  }
}
