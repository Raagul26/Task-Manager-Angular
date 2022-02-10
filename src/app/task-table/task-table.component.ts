import { Component, EventEmitter, Output } from '@angular/core';
import { Task, TaskListService } from '../task-list.service';

interface DisplayStatus{
  modal:string
  display:boolean
}

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styles: []
})
export class TaskTableComponent {

  @Output() modalDisplayStatus: EventEmitter<DisplayStatus> = new EventEmitter<DisplayStatus>();

  constructor(private taskListService: TaskListService) { }

  taskList: Task[] = this.taskListService.getTaskList()

  object = Object

  openModal():void {
    this.modalDisplayStatus.emit({modal:'add',display:true})
  }

  editTask(event: MouseEvent): void {
    this.modalDisplayStatus.emit({modal:'edit',display:true})
    this.taskListService.setId(Object(event.target).id)
  }

  removeTask(event: MouseEvent): void {
    this.taskListService.deleteTask(Object(event.target).id)
  }

}
