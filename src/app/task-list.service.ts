import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  taskList:any[] = []
  no:number = 1

  constructor() { }

  addTask(row:object)
  {
    Object.assign(row, { "id":this.no });
    this.taskList.push(row)
    this.no+=1
  }

  deleteTask(id:any)
  {
    let row = this.taskList.find(e=>e.id==id.replace(/[^0-9]+/,''))
    this.taskList.splice(row,1)
  }
  
  getTaskList()
  {
    return this.taskList
  }

}
