import { Component, EventEmitter, Output } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styles: [
  ]
})
export class TaskTableComponent {
  
  @Output() addTaskDisplayStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() editTaskDisplayStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private taskListService:TaskListService) { }

  taskList:Task[] = this.taskListService.getTaskList()

  Object=Object

  openAddModal():void {
    this.addTaskDisplayStatus.emit(true)
  }

  openEditModal():void
  {
    this.editTaskDisplayStatus.emit(true)
  }

  editTask(event:any):void
  {
    this.openEditModal()
    const editElemId=event.target.id
    this.taskListService.setId(editElemId)
  }

  removeTask(event:any):void
  {
    const elemId=event.target.id
    this.taskListService.deleteTask(elemId)
  }
}
