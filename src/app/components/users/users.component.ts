import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  noFound = false;
  user !: User
  constructor(
    private userService : UsersService,
  ) { }

  ngOnInit(): void {
  }

  getUser(id:string){
    this.noFound = false;
    // this.user = null
this.userService.getUser(id).subscribe((u : User)=>
{this.user = u;},
(e : any)=>{ console.error(e);
  this.noFound = true;
}


)

  }

}
