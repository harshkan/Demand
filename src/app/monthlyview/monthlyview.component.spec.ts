import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyviewComponent } from './monthlyview.component';

describe('MonthlyviewComponent', () => {
  let component: MonthlyviewComponent;
  let fixture: ComponentFixture<MonthlyviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
