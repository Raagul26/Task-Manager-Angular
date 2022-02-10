import { Injectable } from '@angular/core';

export interface Task {
  task: string
  assigned: string
  assignedTo: string
  status: string
  id: String
}

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  taskList: Task[] = []
  id: string | undefined

  title!: string
  buttonName!: string

  constructor() { }

  addTask(row: Task): void {
    this.taskList.push(row)
  }

  editTask(editRow: Task): void {
    let row: Task | undefined = this.taskList.find(e => e.id == this.id)
    if (row) {
      row.task = editRow.task
      row.assigned = editRow.assigned
      row.assignedTo = editRow.assignedTo
      row.status = editRow.status
    }
  }

  deleteTask(id: string): void {
    let row: number = this.taskList.findIndex(elem => elem.id == id.replace('-del', ''))
    this.taskList.splice(row,1)
  }

  getEdittingData():Task | undefined {
    return this.taskList.find(elem => elem.id == this.id)
  }

  getTaskList(): Task[] {
    return this.taskList
  }

  setId(id: string): void {
    this.id = id.replace('-edit', '')
  }
  
  setTitleAndName(title: string, buttonName: string): void {
    this.title = title
    this.buttonName = buttonName
  }

}
