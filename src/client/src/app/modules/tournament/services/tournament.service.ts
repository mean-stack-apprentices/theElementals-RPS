import { Injectable } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private socketService: SocketService) {}

  createTournament(){
    this.socketService.createTournament()
  }
}
