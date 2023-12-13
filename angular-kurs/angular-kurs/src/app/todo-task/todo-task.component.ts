import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from '../services/task service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent{
 
  tasksList: Array<string>  =  [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    })
  } 
  
  remove(task: string){
    this.tasksService.remove(task);
  }
  done(task: string){
    this.tasksService.done(task);
  }
}
