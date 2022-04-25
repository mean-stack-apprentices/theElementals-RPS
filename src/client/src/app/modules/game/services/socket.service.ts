import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public sID!: string
  public roomID!: string
  // public sid$ = this.socket.fromEvent('connect').pipe(map(() => this.socket.ioSocket.id))

  constructor(private socket: Socket, private router: Router) {
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

  createRoom(){
    this.router.navigate([`/lobby/${this.socket.ioSocket.id}`])
      this.socket.emit('create-room', this.socket.ioSocket.id)
      this.roomID = (this.socket.ioSocket.id).substring(3,7).toLowerCase()
  }
}
