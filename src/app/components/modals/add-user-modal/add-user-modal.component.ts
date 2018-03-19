import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html'
})
export class AddUserModalComponent {

  @Output() onAddUser = new EventEmitter<User>();
  addUserForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl('')
  });

  constructor() { }

  addUser(): void {
    let user: User = {
      name: this.addUserForm.value.name,
      lastName: this.addUserForm.value.lastName,
      age: this.addUserForm.value.age
    };
    this.onAddUser.emit(user);
    this.addUserForm.reset();
  }

}
