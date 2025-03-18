import { Injectable, OnInit, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class TasksService {

    private tasks = signal<Task[]>([]);

    allTasks = this.tasks.asReadonly();

    ngOnInit(): void {
        console.log('TasksService');
    }

    constructor() {}
    
    addTask(taskdata:{title: string, description: string}) {
        const newTask: Task = { ...taskdata, id: Math.random().toString(), status: 'OPEN' };
        this.tasks.update((tasks) => [...tasks, newTask]);
    }

    updateTaskStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks.update((oldTasks) => oldTasks.map(
            (task)=>
                task.id === taskId ? {...task, status: newStatus} : task
        ) );  
      }
}