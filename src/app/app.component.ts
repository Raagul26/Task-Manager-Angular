import { Component } from '@angular/core';
import { TaskListService } from './task-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task-Manager-Angular';

  displayModal: boolean = false

  constructor(private taskListService: TaskListService) { }

  openModal(displayStatus: any): void {
    if(displayStatus.modal == 'edit')
    {
      this.taskListService.setTitleAndName('Edit Task','Edit')
    }
    else
    {
      this.taskListService.setTitleAndName('Add Task','ADD')
    }
    this.displayModal = displayStatus.display
  }

  cancelModal(displayStatus: boolean): void {
    this.displayModal = displayStatus
  }
  
}
