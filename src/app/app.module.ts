import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppViewComponent } from './views/app.view';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { PostStatusPipe } from './pipes/post-status.pipe';
@NgModule({ 
  declarations: [
    AppComponent,
    AppViewComponent,
    PostsComponent,
    UsersComponent,
    HeaderComponent,
    PostStatusPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
