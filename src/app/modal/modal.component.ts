import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskListService } from '../task-list.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  title: string = this.taskListService.title
  buttonName: string = this.taskListService.buttonName
  dataForm!: FormGroup

  @Output() displayStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private taskListService: TaskListService) { }

  ngOnInit(): void {
    if (this.title == 'Add Task') {
      this.dataForm = new FormGroup(
        {
          task: new FormControl('', [Validators.required]),
          assigned: new FormControl('', [Validators.required]),
          assignedTo: new FormControl('', [Validators.required]),
          status: new FormControl('', [Validators.required])
        }
      )
    }
    else {
      this.dataForm = new FormGroup(
        {
          task: new FormControl(this.taskListService.getEdittingData()?.task, [Validators.required]),
          assigned: new FormControl(this.taskListService.getEdittingData()?.assigned, [Validators.required]),
          assignedTo: new FormControl(this.taskListService.getEdittingData()?.assignedTo, [Validators.required]),
          status: new FormControl(this.taskListService.getEdittingData()?.status, [Validators.required])
        }
      )
    }
  }

  submit(form: FormGroup): void {
    if (form.valid && this.title == 'Add Task' && form.value.assigned != form.value.assignedTo) {
      form.value.id=uuidv4()
      this.taskListService.addTask(form.value)
      this.closeModal()
    }
    else if (form.valid && this.title == 'Edit Task' && form.value.assigned != form.value.assignedTo) {
      this.taskListService.editTask(form.value)
      this.closeModal()
    }
  }

  closeModal(): void {
    this.displayStatus.emit(false)
  }

}
