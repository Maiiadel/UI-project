import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss'],
})
export class ClientHomeComponent implements OnInit {
  clientName: string = 'Client Mai';
  Userslist = [];
  constructor(private usersservice: UsersService) {}
  ngOnInit(): void {
    this.usersservice.fetchUsers().subscribe((data) => {
      console.log(data);
      // this.Userslist=data;
    });
  }
}
