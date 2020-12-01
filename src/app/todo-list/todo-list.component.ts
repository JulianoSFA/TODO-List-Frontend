import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TODOService } from '../todo.service';
import { TODO } from '../TODO';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TODOListComponent implements OnInit {

  items: Observable<TODO[]>;

  constructor(private todoService: TODOService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.items = this.todoService.getTODOList();
  }

}
