import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentLobbyComponent } from './tournament-lobby.component';

describe('TournamentLobbyComponent', () => {
  let component: TournamentLobbyComponent;
  let fixture: ComponentFixture<TournamentLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentLobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
