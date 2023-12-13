
import { Component, EventEmitter, Output } from '@angular/core';
import { TasksService } from '../services/task service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent{

  newTask!: string; 
 
  constructor(private tasksService: TasksService) {}

  ngOnInit() {}
  
  add(){
    this.tasksService.add(this.newTask);
    this.newTask = '';
  }

}