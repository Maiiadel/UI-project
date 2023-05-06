import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss'],
})
export class ClientHomeComponent implements OnInit {
  clientName: string = 'Client Mai';
  Userslist = [];
  constructor(private db: FirebaseService) {}
  ngOnInit(): void {
    console.log(this.db.user);
  }
}
