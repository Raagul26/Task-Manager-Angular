import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {    

  taskList:any[] = []
  no:number = 1
  id:number | undefined

  title!:string 
  buttonName!:string

  constructor() { }

  addTask(row:any):void
  {
    row.id=this.no
    this.taskList.push(row)
    this.no+=1
  }

  editTask(editRow:any):void
  {
    let row = this.taskList.find(e=>e.id==this.id)
    row.task=editRow.task
    row.assigned=editRow.assigned
    row.assignedTo=editRow.assignedTo
    row.status=editRow.status
    console.log(this.taskList);
    
  }

  deleteTask(id: string):void
  {
    let row = this.taskList.find(e=>e.id==Number(id.replace(/[^0-9]+/,'')))
    this.taskList.splice(row,1)
  }
  
  getEdittingData()
  {
    return this.taskList.find(e=>e.id==this.id) 
  }

  getTaskList():Task[]
  {
    return this.taskList
  }

  setId(id:string):void
  {
    this.id=Number(id.replace(/[^0-9]+/,''))
  }

  setTitleAndName(title:string, buttonName:string)
  {
   this.title=title
   this.buttonName=buttonName
  }
  
}
