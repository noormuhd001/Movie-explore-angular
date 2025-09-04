import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  task = "";
  taskList: { id: number, name: string }[] = [];

  addTask() {
    this.taskList.push({ id: this.taskList.length, name: this.task })

    console.log(this.taskList);
  }
}
