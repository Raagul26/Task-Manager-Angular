import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styles: [
  ]
})
export class AddModalComponent implements OnInit {

  taskName:string =  ""
  assigned:string = ""
  assignedTo:string = ""
  status:string = ""

  @Output() data: EventEmitter<any> = new EventEmitter<any>();
  @Output() displayStatus: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  addTask() {
    
    if (this.taskName !== "" && this.assigned !== "" && this.assignedTo !== "" && this.status !== "") {

      var rowData = {
        task: this.taskName,
        assigned: this.assigned,
        assignedTo: this.assignedTo,
        status: this.status
      }
      this.data.emit(rowData)
    }
  }

  cancelModal()
  {
    this.displayStatus.emit(false)
  }

}
