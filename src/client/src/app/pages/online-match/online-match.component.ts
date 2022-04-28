import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-online-match',
  templateUrl: './online-match.component.html',
  styleUrls: ['./online-match.component.scss']
})
export class OnlineMatchComponent implements OnInit {

  constructor(private navigation: NavigationService) { }

  back(): void {
    this.navigation.back()
  }

  ngOnInit(): void {
  }

}
