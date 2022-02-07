import { Component, EventEmitter, Output } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styles: [
  ]
})
export class AddModalComponent {

  taskName: string | undefined
  assigned: string | undefined
  assignedTo: string | undefined
  status: string = ""

  @Output() displayStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private taskListService: TaskListService) { }

  addTask():void {

    if (this.taskName && this.assigned && this.assignedTo && this.status && this.assigned !== this.assignedTo) {

      var rowData = {
        task: this.taskName,
        assigned: this.assigned,
        assignedTo: this.assignedTo,
        status: this.status,
      }
      this.taskListService.addTask(rowData)
      this.displayStatus.emit(false)
    }
  }

  cancelModal():void {
    this.displayStatus.emit(false)
  }

}
