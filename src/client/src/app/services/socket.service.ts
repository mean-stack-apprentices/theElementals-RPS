import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public sID!: string
//  tPin?: Observable<string | null>
  tPin: string | undefined
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

  createTournament(){
    this.socket.emit('create-tournament', this.socket.ioSocket.id, (data:any) => {
      this.tPin = data
      this.router.navigate(['/tournament/lobby'])
    })


    // this.socket.on('generate tournament pin', (data:string)  => {
    //   this.tPin = data
    //   console.log('Pin received: ', this.tPin)
    // })


    // this.socket.on('generate tournament pin',(data: any )=> {
    //   console.log('Here is your tournament Pin', data)
    //   this.tPin = data

    // })
  }
}


