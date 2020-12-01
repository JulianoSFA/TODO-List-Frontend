import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTODOComponent } from './create-todo/create-todo.component';
import { TODOItemComponent } from './todo-item/todo-item.component';
import { TODOListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTODOComponent,
    TODOItemComponent,
    TODOListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
