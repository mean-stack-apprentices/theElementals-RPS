import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournamentpin',
  templateUrl: './tournamentpin.component.html',
  styleUrls: ['./tournamentpin.component.scss']
})
export class TournamentpinComponent implements OnInit {
@Input() tournamentPin: string | undefined

  constructor() { }


  ngOnInit(): void {
  }

}
