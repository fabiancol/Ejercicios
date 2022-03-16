import { Component, OnInit } from '@angular/core';
import { compare } from 'fast-json-patch';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-patch-user',
  templateUrl: './patch-user.component.html',
  styleUrls: ['./patch-user.component.css']
})
export class PatchUserComponent implements OnInit {
users : User[];
model : User;
OriginalUser : User;

  constructor(
    private userService : UsersService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((
      u : User[])=>{
        this.users = u;
        this.model = Object.assign({}, this.users[0]);
        this.OriginalUser = this.users[0]
      })
  }

  SelectUser(user: User) {
    this.model = Object.assign({}, user);
    this.OriginalUser = user;
  }

  onSubmit() {
    const patch = compare(this.OriginalUser, this.model);
    console.log(patch);

  }

}
