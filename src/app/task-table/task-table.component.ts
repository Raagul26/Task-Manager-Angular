import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styles: [
  ]
})
export class TaskTableComponent implements OnInit {
  
  @Output() displayStatus: EventEmitter<any> = new EventEmitter<any>();

  constructor(private taskListService:TaskListService) { }

  taskList:object[] = this.taskListService.getTaskList()

  Object=Object

  ngOnInit(): void {
  }

  openAddModal() {
    this.displayStatus.emit(true)
  }

  removeTask(event:any)
  {
    const elemId=event.target.id
    this.taskListService.deleteTask(elemId)
  }
}
