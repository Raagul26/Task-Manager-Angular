import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styles: [
  ]
})
export class TaskTableComponent implements OnInit {
  
  @Output() addTaskDisplayStatus: EventEmitter<any> = new EventEmitter<any>();
  @Output() editTaskDisplayStatus: EventEmitter<any> = new EventEmitter<any>();

  constructor(private taskListService:TaskListService) { }

  taskList:object[] = this.taskListService.getTaskList()

  Object=Object

  ngOnInit(): void {
  }

  openAddModal() {
    this.addTaskDisplayStatus.emit(true)
  }

  openEditModal()
  {
    this.editTaskDisplayStatus.emit(true)
  }

  editTask(event:any)
  {
    this.openEditModal()
    const editElemId=event.target.id
    this.taskListService.setId(editElemId)
  }

  removeTask(event:any)
  {
    const elemId=event.target.id
    this.taskListService.deleteTask(elemId)
  }
}
