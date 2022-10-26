import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string = "";

  constructor() { }

  addMessage(message: string): void {
    this.messages = message;
    setTimeout(() => this.clear(), 4000);
  }
  clear(): void {
    this.messages = ""
  }
}
