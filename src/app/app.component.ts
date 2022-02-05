import { Component } from '@angular/core';
import { TaskListService } from './task-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task-Manager-Angular';
  addTaskDisplay = false
  editTaskDisplay = false

  constructor(private taskListService: TaskListService) { }

  openAddModal(displayStatus: boolean) {
    this.addTaskDisplay = displayStatus
  }

  closeAddModal(displayStatus: boolean) {
    this.addTaskDisplay = displayStatus
  }

  openEditModal(displayStatus: boolean) {
    this.editTaskDisplay = displayStatus
  }

  cancelEditModal(displayStatus: boolean) {
    this.editTaskDisplay = displayStatus
  }
}
