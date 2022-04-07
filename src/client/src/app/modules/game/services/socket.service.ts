import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  // url = 'http://localhost:4200';

  constructor(private socket: Socket) {
   }

   joinGame(){
     this.socket.emit('join game')
     console.log(`player joined`)
   }
}
