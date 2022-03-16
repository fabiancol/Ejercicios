import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-listar-users',
  templateUrl: './listar-users.component.html',
  styleUrls: ['./listar-users.component.css']
})
export class ListarUsersComponent implements OnInit {
users : User[] = [];

  constructor(
    private userService : UsersService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (u : User[])=>
      { this.users = u; },
      e => console.error(e) 
    );
  }
 
}
