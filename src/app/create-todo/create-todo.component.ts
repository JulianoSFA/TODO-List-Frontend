import { Component, OnInit } from '@angular/core';
import { TODO } from '../TODO';
import { TODOService } from '../todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTODOComponent implements OnInit {

  todo: TODO = new TODO();
  submitted = false;

  constructor(private todoService: TODOService) { }

  ngOnInit(): void {
  }

  newTODO(){
    this.submitted = false;
    this.todo = new TODO();
  }

  save() {
    this.todoService.createTODO(this.todo)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.todo = new TODO();
  }

  onSubmit() {
    this.save();
  }

}
