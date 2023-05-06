import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailAuthCredential } from 'firebase/auth';
import { NgModel } from '@angular/forms';
import { Item } from './components/models/Item';
import { User } from './components/models/User';
import { Bill } from './components/models/Bill';
import { Bundle } from './components/models/Bundle';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  items: any;
  user: any;
  users: any;
  userType: any;

  readonly Root = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    this.items = this.http.get(this.Root + '/items');
    return this.items;
  }

  get_user(uid: string): Observable<User> {
    console.log('get_user in FirebaseService Entered');
    // const encodedEmail = encodeURIComponent(email);
    let url = this.Root + `/user/${uid}`;
    console.log(url);
    this.user = this.http.post(url, uid);

    return this.user;
  }

  fetchUsers(): Observable<any> {
    this.users = this.http.get(this.Root + `/users`);
    return this.users;
  }
}
