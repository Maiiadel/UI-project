import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UsersService } from 'C:/Users/Mai/UI project/src/app/shared/services/users.service';

@Component({
  selector: 'app-provider-home',
  templateUrl: './provider-home.component.html',
  styleUrls: ['./provider-home.component.scss']
})
export class ProviderHomeComponent implements OnInit{
  user:any;
 //providerName:string="Provider Khaled";
 constructor(private http: HttpClient ,private userServ:UsersService){};
 ngOnInit(): void {
  this.userServ.fetchSpecificUser().subscribe(data => {
    //console.warn("users list : "+ data);
    this.user = data;
  });
  };


}