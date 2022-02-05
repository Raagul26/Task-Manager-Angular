import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  taskList:any[] = []
  no:number = 1
  id:number | undefined
  constructor() { }

  addTask(row:any)
  {
    row.id=this.no
    this.taskList.push(row)
    this.no+=1
  }

  editTask(editRow:any)
  {
    let row = this.taskList.find(e=>e.id==this.id)
    row.task=editRow.task
    row.assigned=editRow.assigned
    row.assignedTo=editRow.assignedTo
    row.status=editRow.status
  }

  deleteTask(id:any)
  {
    let row = this.taskList.find(e=>e.id==id.replace(/[^0-9]+/,''))
    this.taskList.splice(row,1)
  }
  
  getEdittingData()
  {
    return this.taskList.find(e=>e.id==this.id) 
  }

  getTaskList()
  {
    return this.taskList
  }

  setId(id:any)
  {
    this.id=id.replace(/[^0-9]+/,'')
  }
}
