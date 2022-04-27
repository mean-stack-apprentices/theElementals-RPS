import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentpinComponent } from './tournamentpin.component';

describe('TournamentpinComponent', () => {
  let component: TournamentpinComponent;
  let fixture: ComponentFixture<TournamentpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentpinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
