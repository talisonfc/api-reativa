import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from "ng-socket-io"

@Injectable()
export class StreamProvider {

  constructor(
    private socket: Socket,
    public http: HttpClient) {
    
  }

  send(evento, message){
    this.socket.emit(evento, message)
  }

  listen(event: string){
    return this.socket.fromEvent(event)
  }

}
