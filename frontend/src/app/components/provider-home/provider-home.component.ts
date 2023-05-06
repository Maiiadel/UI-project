import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-provider-home',
  templateUrl: './provider-home.component.html',
  styleUrls: ['./provider-home.component.scss'],
})
export class ProviderHomeComponent implements OnInit {
  user: any;
  //providerName:string="Provider Khaled";
  constructor(private db: FirebaseService) {}
  ngOnInit(): void {
    this.user = this.db.user;
    console.log(
      `this.user['first_name'] = ${JSON.stringify(this.user['first_name'])}`
    );
  }
}
