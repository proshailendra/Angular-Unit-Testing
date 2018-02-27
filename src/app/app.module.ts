import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app.routing';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent, routedComponents
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
