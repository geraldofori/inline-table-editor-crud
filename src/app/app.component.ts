import {Component, OnInit} from '@angular/core';
import {User} from "./data/users/Users";
import {UsersData} from "./data/users/UsersData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  users: User[] = [];

  constructor() {
  }
  ngOnInit() : void{
    this.users = UsersData;
  }


}
