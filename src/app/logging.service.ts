import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(message: string) {
    const tiemStamp = new Date().toLocaleDateString();
    console.log(`${tiemStamp}: ${message}`);
  }
  constructor() { }
}
