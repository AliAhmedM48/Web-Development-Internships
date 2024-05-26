import {
  Component,
  EventEmitter,
  Input,
  InputSignal,
  Output,
  WritableSignal,
  computed,
  input,
  output,
} from '@angular/core';
import { DUMMY_USERS, User } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) user!: User;
  user = input.required<User>();
  // @Output() select = new EventEmitter();
  select = output<User>();
  // selectedUser = DUMMY_USERS[randomIndex];

  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // get imagePath() {
  //   return 'assets/users/' + this.user()?.avatar;
  // }

  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);

    this.select.emit(this.user());
  }
}
