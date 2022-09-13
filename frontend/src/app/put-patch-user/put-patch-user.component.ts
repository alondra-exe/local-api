import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserApiService } from '../services/userapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-put-patch-user',
  templateUrl: './put-patch-user.component.html',
  styleUrls: ['./put-patch-user.component.css']
})
export class PutPatchUserComponent implements OnInit {
  user: User = new User();

  constructor(
    private userapi: UserApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.fillData();
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

  patchUser(): void {
    console.log(this.user);
    this.userapi.patchUser(this.user).subscribe(
      response => this.router.navigate(['/users'])
    )
  }


}
