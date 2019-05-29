import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailviewComponent } from './app-detailview.component';

describe('AppDetailviewComponent', () => {
  let component: AppDetailviewComponent;
  let fixture: ComponentFixture<AppDetailviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
