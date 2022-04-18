import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayercomputerComponent } from './game-playercomputer.component';

describe('GamePlayercomputerComponent', () => {
  let component: GamePlayercomputerComponent;
  let fixture: ComponentFixture<GamePlayercomputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePlayercomputerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlayercomputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
