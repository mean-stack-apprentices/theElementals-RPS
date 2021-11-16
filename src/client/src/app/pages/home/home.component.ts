import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { loggedInSelector } from 'src/app/store/selectors/user/user.selectors';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn$: Observable<User | null>
  constructor(private store: Store<AppState>) { 
    this.loggedIn$ = this.store.select(loggedInSelector)
    console.log(this.loggedIn$)
  }

  ngOnInit(): void {
  }

}
