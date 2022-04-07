import { Component } from '@angular/core';
import { SocketService } from './modules/game/services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(private socketService: SocketService){

  }
}
