import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  model: User = {
    id: 0,
    name: '',
    username: ''
  };

  constructor(
    private userService : UsersService
  ) { }

  ngOnInit(): void {
   
    
  }

  onSubmit(){
    // console.log(this.model);
    this.userService.createUser(this.model).
    subscribe((r:User)=>{
      console.log(r)},
      e => console.error(e)   
    );
  }

}
