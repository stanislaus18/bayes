import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTournamentComponent } from './app-tournament.component';

describe('AppTournamentComponent', () => {
  let component: AppTournamentComponent;
  let fixture: ComponentFixture<AppTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
