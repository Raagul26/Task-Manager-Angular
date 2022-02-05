import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { FormsModule } from '@angular/forms';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { TaskTableComponent } from './task-table/task-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AddModalComponent,
    EditModalComponent,
    TaskTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
