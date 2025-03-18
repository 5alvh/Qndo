import { inject, Injectable, OnInit, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable(
    {
        providedIn: 'root', //ProvidedIn: 'root', means that the service will be provided at the root level of the application, if not specified, the service will be provided at the component level with providers: [TasksService], but this make that everytime we initiate this new component we will create a new instance of the service
    }
)
export class TasksService {

    private tasks = signal<Task[]>([]);
    private loggingService = inject(LoggingService); // when we inject a service in a nother service, the service should be provided at the root level or declared in the main.ts file in the providers array. if not, the service can't be injected in other service

    allTasks = this.tasks.asReadonly();

    ngOnInit(): void {
        console.log('TasksService');
    }

    constructor() {}
    
    addTask(taskdata:{title: string, description: string}) {
        const newTask: Task = { ...taskdata, id: Math.random().toString(), status: 'OPEN' };
        this.tasks.update((tasks) => [...tasks, newTask]);
        this.loggingService.log('Added new task with title '+taskdata.title);
    }

    updateTaskStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks.update((oldTasks) => oldTasks.map(
            (task)=>
                task.id === taskId ? {...task, status: newStatus} : task
        ) );  
        this.loggingService.log('Change task status to '+newStatus);
      }
      
}