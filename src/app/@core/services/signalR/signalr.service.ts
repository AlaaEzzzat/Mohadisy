import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from '@microsoft/signalr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  public hubConnection!: HubConnection;
  constructor() {}
  startConnection = () => {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('http:/:localhost:1874/notify')
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('started');
      })
      .catch((err: any) => {
        console.log('faild' + err);
      });
  };

  askServer() {
    this.hubConnection.invoke('askServer', 'key');
  }
  askServerListener() {
    this.hubConnection.on('askServerResponse', (someText) => {
      console.log(someText);
    });
  }
}
