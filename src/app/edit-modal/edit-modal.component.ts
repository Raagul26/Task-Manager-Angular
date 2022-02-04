import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styles: [
  ]
})
export class EditModalComponent implements OnInit {

  @Output() editData: EventEmitter<any> = new EventEmitter<any>();
  @Output() displayStatus: EventEmitter<any> = new EventEmitter<any>();

  taskName: string = ""
  assigned: string = ""
  assignedTo: string = ""
  status: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  editTask() {
    if (this.taskName !== "" && this.assigned !== "" && this.assignedTo !== "" && this.status !== "") {

      var edittedRowData = {
        task: this.taskName,
        assigned: this.assigned,
        assignedTo: this.assignedTo,
        status: this.status
      }
      this.editData.emit(edittedRowData)
    }
  }

  cancelEditModal() {
    this.displayStatus.emit(false)
  }
}
