import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";



@Injectable()
export class TasksService{

    title!: string;

    private tasksList: Array<string> = [];
    private tasksDone: Array<string> = [];

    private tasksListObs = new BehaviorSubject<Array<string>>(this.tasksList);
    private tasksDoneObs = new BehaviorSubject<Array<string>>(this.tasksList);

    constructor(){
        this.tasksList = ['Sprzątanie', 'Nauka', 'podlewanie', 'ukaz']; 
        this.tasksListObs.next(this.tasksList);
    }

    add(task: string){
      this.tasksList.push(task);
      this.tasksListObs.next(this.tasksList);
    }
    remove(task: string){
      this.tasksList = this.tasksList.filter( e=> e !== task)
      this.tasksListObs.next(this.tasksList);
    }
  
    done(task: string){
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
    }
  
    getTaskListObs(): Observable<Array<string>>{
        return this.tasksListObs.asObservable();
    }
    getTaskDoneObs(): Observable<Array<string>>{
        return this.tasksDoneObs.asObservable();
    }
}