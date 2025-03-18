import { InjectionToken } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export type TasksStatusOptions = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  text: string;
}[]

export const tasksStatusOptions: TasksStatusOptions  = [
  {value: 'open', taskStatus: 'OPEN', text: 'Open'},
  {value: 'in-progress', taskStatus: 'IN_PROGRESS', text: 'In-Progress'},
  {value: 'done', taskStatus: 'DONE', text: 'Completed'}
]

export const TASK_STATUS_OPTIONS = new InjectionToken<TasksStatusOptions>('TASK_STATUS_OPTIONS');

export const taskStatusProvider = {
    provide: TASK_STATUS_OPTIONS,
    useValue: tasksStatusOptions
 }
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
