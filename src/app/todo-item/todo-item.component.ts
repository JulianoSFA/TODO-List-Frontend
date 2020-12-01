import { Component, OnInit, Input } from '@angular/core';
import { TODOService } from '../todo.service';
import { TODO } from '../TODO';
import { TODOListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TODOItemComponent implements OnInit {

  @Input() todo: TODO;
  @Input() editMode: boolean;

  constructor(private todoService: TODOService, private listComponent: TODOListComponent) { }

  ngOnInit(): void {
  }

  updateItem(state: boolean) {
    this.todoService.updateTODO(this.todo.id,
      { status: state, description: this.todo.description, dateTime: this.todo.dateTime})
      .subscribe(
        data => {
          console.log(data);
          this.todo = data as TODO;
        },
        error => console.log(error));
  }

  updateDescription(desc: string){
    if (this.editMode && desc !== ""){
      this.todoService.updateTODO(this.todo.id,
        {status: this.todo.status, description: desc, dateTime: this.todo.dateTime})
        .subscribe(
          data => {
            console.log(data);
            this.todo = data as TODO;
          },
          error => console.log(error));
    }
    this.editMode = !this.editMode;
  }

  deleteItem() {
    this.todoService.deleteTODO(this.todo.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

  myFunc(){
    console.log("function called");
  }

}
