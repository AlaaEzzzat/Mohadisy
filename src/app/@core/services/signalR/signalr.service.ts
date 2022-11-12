/* import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  public hubConnection: signalR.HubConnection;
  constructor() {}
  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(
        'http:/:localhost:1874/notify' ,  {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      }
      )
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
 */
