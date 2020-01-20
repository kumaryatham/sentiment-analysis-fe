import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  currentUser: User;
  userList = [];

  constructor(private authService: AuthenticationService,
    private userService: UserService) {
      this.currentUser = this.authService.currentUserValue;
     }

  ngOnInit() {
    this.getAllUsers();
  }

  private getAllUsers() {
    this.userService.getAll().pipe(first())
    .subscribe(users => {
      this.userList = users;
    });
  }

  deleteUser(username: string) {
    this.userService.delete(username)
        .pipe(first())
        .subscribe(() => this.getAllUsers());
  }
}
