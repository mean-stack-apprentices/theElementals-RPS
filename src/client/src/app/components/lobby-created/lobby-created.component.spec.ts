import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyCreatedComponent } from './lobby-created.component';

describe('LobbyCreatedComponent', () => {
  let component: LobbyCreatedComponent;
  let fixture: ComponentFixture<LobbyCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
