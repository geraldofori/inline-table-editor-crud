import {Component, OnInit, TemplateRef} from '@angular/core';
import {User} from "./data/users/Users";
import {UsersData} from "./data/users/UsersData";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  users: User[] = [];

  modalRef?: BsModalRef;

  form = this.fb.group({
    id: new FormControl<number | null>(null),
    name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('',[Validators.required, Validators.email]),
    description: new FormControl<string>(''),
    company: new FormControl<string>('',[Validators.required]),
  })


  constructor(private modalService: BsModalService, private fb: FormBuilder) {

  }

  openModal(template: TemplateRef<any>, user?:User){
    if(user != null){
      this.form.patchValue({
        id: user!.id,
        name: user.name,
        email: user.email,
        description: user.description,
        company: user.company
      })
    }else{
      this.form.reset();
    }
      this.modalRef = this.modalService.show(template);
  }

  updateUser(){
    if(this.form.value.id != null) {
      if(this.form.valid){
        const index: number = this.users.findIndex((user: User) => user.id === this.form.value.id);

        if (index !== -1) {
          this.users[index] = {
            id: this.form.value.id,
            name: this.form.value.name,
            email: this.form.value.email,
            description: this.form.value.description,
            company: this.form.value.company
          } as User;
        }

        this.modalRef?.hide();

      }
    }else{
      if(this.form.valid){
        const user: User = {
          id: this.users.length,
          name: this.form.value.name,
          email: this.form.value.email,
          description: this.form.value.description,
          company: this.form.value.company
        } as User;

        this.users.push(user);

        this.modalRef?.hide();

      }


    }


  }
  ngOnInit() : void{
    this.users = UsersData;
  }


}

