import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserApiService } from '../services/userapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-put-user',
  templateUrl: './put-user.component.html',
  styleUrls: ['./put-user.component.css']
})
export class PutUserComponent implements OnInit {
  user: User = new User();

  constructor(
    private userapi: UserApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  fillData(): void {
    this.activatedRoute.params.subscribe(
      allUsers => {
        let id = allUsers['id'];
        if (id) {
          this.userapi.getUserById(id).subscribe(
            response => this.user = response);
        }
      }
    )
  }

  putUser(): void {
    console.log(this.user);
    this.userapi.putUser(this.user).subscribe(
      response => this.router.navigate(['/users'])
    )
  }
}
