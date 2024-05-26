import { Component, InputSignal, WritableSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS, User } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users = signal(DUMMY_USERS);
  selectedUser?: User;

  // ngOnInit(): void {
  //   this.selectedUser = DUMMY_USERS[0];
  // }

  onSelectUser(user: User) {
    this.selectedUser = user;
    console.log(user);
  }
}
