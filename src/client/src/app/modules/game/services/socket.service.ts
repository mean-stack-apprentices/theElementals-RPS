import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public sID!: string
  // public sid$ = this.socket.fromEvent('connect').pipe(map(() => this.socket.ioSocket.id))

  constructor(private socket: Socket) {
    this.socket.fromEvent('connect').subscribe(()=> {
      this.sID = this.socket.ioSocket.id
    })
  }
}
