import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineMatchComponent } from './online-match.component';

describe('OnlineMatchComponent', () => {
  let component: OnlineMatchComponent;
  let fixture: ComponentFixture<OnlineMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
