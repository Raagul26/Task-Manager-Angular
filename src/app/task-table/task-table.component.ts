import { Component, EventEmitter, Output } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styles: []
})
export class TaskTableComponent {

  @Output() modalDisplayStatus: EventEmitter<{modal:string,display:boolean}> = new EventEmitter<{modal:string,display:boolean}>();

  constructor(private taskListService: TaskListService) { }

  taskList: Task[] = this.taskListService.getTaskList()

  Object = Object

  openModal():void {
    this.modalDisplayStatus.emit({modal:'add',display:true})
  }

  editTask(event: any): void {
    this.modalDisplayStatus.emit({modal:'edit',display:true})
    const editElemId = event.target.id
    this.taskListService.setId(editElemId)
  }

  removeTask(event: any): void {
    const elemId = event.target.id
    this.taskListService.deleteTask(elemId)
  }
  
}
