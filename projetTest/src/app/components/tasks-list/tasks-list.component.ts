import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../constants/task';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  @Input() tasks: Task[] = [];
  constructor() { }
  ngOnInit(): void {
  }
  removeTask(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
  toggleCompleted(task: Task) {
    task.completed = !task.completed;
  }
}
