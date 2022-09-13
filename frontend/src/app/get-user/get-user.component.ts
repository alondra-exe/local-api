import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserApiService } from '../services/userapi.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  users: User[];
  constructor(private userapi: UserApiService) { }

  ngOnInit(): void {
    this.userapi.getAllUser().subscribe(
      allUsers => (this.users = allUsers));
  }

  deleteUser(user: User): void {
    this.userapi.getUserById(user.id).subscribe(
      response => this.userapi.getAllUser().subscribe(
        response => this.users = response));
  }

}
