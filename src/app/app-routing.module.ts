import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TODOListComponent} from './todo-list/todo-list.component'
import {CreateTODOComponent} from './create-todo/create-todo.component'

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: TODOListComponent},
  { path: 'add', component: CreateTODOComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
