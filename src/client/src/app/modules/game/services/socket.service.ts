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
      let reg = /([-_])\w+/gi
      let ran = String(Math.ceil(Math.random()  * 100000))
      this.sID = this.socket.ioSocket.id
        if (reg.test(this.sID)){
          this.sID = 'guest' + this.sID.substring(5,12).replace(reg, ran).toLowerCase()
        }else {
          this.sID = 'guest' + this.sID.substring(5,12).toLowerCase()
        }
    })
  }
}