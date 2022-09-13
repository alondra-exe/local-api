import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserApiService } from '../services/userapi.service';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {
  user: User = new User();

  constructor(
    private userapi: UserApiService,
    private router: Router) { }

  ngOnInit(): void {
  }

  postUser(): void {
    console.log(this.user);
    this.userapi.postUser(this.user).subscribe(
      response => this.router.navigate(['/users']));
  }
}
