import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsModalService, ModalModule} from "ngx-bootstrap/modal";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule,
    ReactiveFormsModule
  ],
  providers: [
    BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
