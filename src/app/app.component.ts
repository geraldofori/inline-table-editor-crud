import {Component, OnInit, TemplateRef} from '@angular/core';
import {User} from "./data/users/Users";
import {UsersData} from "./data/users/UsersData";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  users: User[] = [];

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {

  }

  openModal(template: TemplateRef<any>){
      this.modalRef = this.modalService.show(template);
  }
  ngOnInit() : void{
    this.users = UsersData;
  }


}

