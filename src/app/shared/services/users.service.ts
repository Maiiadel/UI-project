import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userid!: string;
  constructor(private http:HttpClient) { }

  fetchUsers(){
    let url ='http://localhost:3000/users';
    return this.http.get(url);
  }
  fetchSpecificUser(){
    let url = 'http://localhost:3000/users/'+this.userid;
    return this.http.get(url);
  }
  // AddUser(){
  //   let url = 'http://localhost:3000/users';
  //   return this.http.post(url, );
  // }

}
