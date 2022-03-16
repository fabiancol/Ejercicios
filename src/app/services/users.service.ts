import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
BaseURL = environment.urlApi+'users/';

  constructor(
    private http : HttpClient
  ) { }

  getUser(id:string):Observable<User>{
    const url = this.BaseURL + id;
    return this.http.get<User>(url);
    console.log("rta", this.http.get<User>(url));
  }

  getUsers(): Observable<User[]> {
    //Metodo con Headers
    // const headers = new HttpHeaders({
    //   'Autorization' : 'bearer token',
    //   'X-pagination' : '2'
    // });

    // return this.http.get<User[]>(this.BaseURL, {headers});

    //Query String
       let params = new HttpParams()
       params = params.append('X-pagination', '4')

    return this.http.get<User[]>(this.BaseURL, {params});
  }
}
