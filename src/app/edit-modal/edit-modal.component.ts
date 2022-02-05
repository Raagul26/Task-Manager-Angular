import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styles: [
  ]
})
export class EditModalComponent implements OnInit {

  @Output() displayStatus: EventEmitter<any> = new EventEmitter<any>();

  taskName: string = this.taskListService.getEdittingData().task
  assigned: string = this.taskListService.getEdittingData().assigned
  assignedTo: string = this.taskListService.getEdittingData().assignedTo
  status: string = this.taskListService.getEdittingData().status

  constructor(private taskListService: TaskListService) { }

  ngOnInit(): void {
  }

  editTask() {
    if (this.taskName !== "" && this.assigned !== "" && this.assignedTo !== "" && this.status !== "" && this.assigned !== this.assignedTo) {

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

  cancelEditModal() {
    this.displayStatus.emit(false)
  }
}
