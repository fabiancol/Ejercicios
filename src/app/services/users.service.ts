import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Operation } from 'fast-json-patch';

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

  getUsersWithHeaders(): Observable<any> {
    return this.http.get(this.BaseURL, { observe : 'response'});
  }

  createUser(user : User ):Observable<User>{
    return this.http.post<User>(this.BaseURL, user)
  }

  updateUser(user : User):Observable<User>{
    const url = this.BaseURL + user.id;
    return this.http.put<User>(url, user);
  }

  delUser(id: number):Observable<any>{
    const url = this.BaseURL + id;
    return this.http.delete(url)
  }

  patchUser(id:number, operations : Operation[]){
    const url = this.BaseURL + id;
    return this.http.patch(url, operations)
  }
}
