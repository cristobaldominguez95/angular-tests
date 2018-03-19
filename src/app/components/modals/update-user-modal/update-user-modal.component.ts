import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-user-modal',
  templateUrl: './update-user-modal.component.html'
})
export class UpdateUserModalComponent implements OnChanges {

  @Output() onUpdateUser = new EventEmitter<User>();
  @Input() user: User;
  updateUserForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl('')
  });

  constructor() { }
  
  ngOnChanges() {
    if (this.user != undefined) {
      this.updateUserForm.setValue(this.user);
    }
  }

  updateUser(): void {
    let newUser: User = {
      name: this.updateUserForm.value.name,
      lastName: this.updateUserForm.value.lastName,
      age: this.updateUserForm.value.age
    };
    this.onUpdateUser.emit(newUser);
    this.updateUserForm.reset();
  }

}
