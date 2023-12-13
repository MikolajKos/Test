import { Component, Input } from '@angular/core';
import { TasksService } from '../services/task service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent {
  tasksDone: Array<string> = [];
  
  constructor(private tasksService: TasksService) {}

  ngOnInit(){
    this.tasksService.getTaskDoneObs().subscribe((tasks: Array<string>) =>{
      this.tasksDone = tasks;
    })
  }

}
