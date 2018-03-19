import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  users: User[] = [
    {
      name: 'Cristóbal',
      lastName: 'Domínguez',
      age: 22
    },
    {
      name: 'Antonio',
      lastName: 'Pérez',
      age: 12
    },
    {
      name: 'David',
      lastName: 'Rodríguez',
      age: 28
    },
    {
      name: 'Luis',
      lastName: 'López',
      age: 56
    }
  ];
  userToUpdate: User;

  constructor() { }

  onAddUser(user: User) {
    this.users.push(user);
  }

  onUpdateUser(user: User) {
    this.users[this.users.indexOf(this.userToUpdate)] = user;
  }

  delete(user: User): void {
    this.users.splice(this.users.indexOf(user), 1);
  }

  update(user: User): void {
    this.userToUpdate = user;
  }

}
