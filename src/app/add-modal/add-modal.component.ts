import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styles: [
  ]
})
export class AddModalComponent implements OnInit {

  taskName: string = ""
  assigned: string = ""
  assignedTo: string = ""
  status: string = ""

  @Output() displayStatus: EventEmitter<any> = new EventEmitter<any>();

  constructor(private taskListService: TaskListService) { }

  ngOnInit(): void {
  }

  addTask() {

    if (this.taskName !== "" && this.assigned !== "" && this.assignedTo !== "" && this.status !== "" && this.assigned !== this.assignedTo) {

      var rowData = {
        task: this.taskName,
        assigned: this.assigned,
        assignedTo: this.assignedTo,
        status: this.status
      }
      this.taskListService.addTask(rowData)
      this.displayStatus.emit(false)
    }
  }

  cancelModal() {
    this.displayStatus.emit(false)
  }

}
