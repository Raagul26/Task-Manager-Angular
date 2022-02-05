import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  taskList:object[] = []
  no:number = 1

  constructor() { }

  addTask(row:object)
  {
    Object.assign(row, { "id":this.no });
    this.taskList.push(row)
    this.no+=1
  }

  getTaskList()
  {
    return this.taskList
  }

}
