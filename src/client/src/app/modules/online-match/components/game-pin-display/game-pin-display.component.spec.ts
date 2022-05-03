import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePinDisplayComponent } from './game-pin-display.component';

describe('GamePinDisplayComponent', () => {
  let component: GamePinDisplayComponent;
  let fixture: ComponentFixture<GamePinDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePinDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePinDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
