import { Component, EventEmitter, Output } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styles: [
  ]
})
export class EditModalComponent {

  @Output() displayStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  taskName: string = this.taskListService.getEdittingData().task
  assigned: string = this.taskListService.getEdittingData().assigned
  assignedTo: string = this.taskListService.getEdittingData().assignedTo
  status: string = this.taskListService.getEdittingData().status

  constructor(private taskListService: TaskListService) { }

  editTask():void {
    if (this.taskName && this.assigned && this.assignedTo && this.status && this.assigned !== this.assignedTo) {

      var edittedRowData = {
        task: this.taskName,
        assigned: this.assigned,
        assignedTo: this.assignedTo,
        status: this.status
      }
      this.taskListService.editTask(edittedRowData)
      this.cancelEditModal()
    }
  }

  cancelEditModal():void {
    this.displayStatus.emit(false)
  }
}
