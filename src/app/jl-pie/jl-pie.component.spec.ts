import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JlPieComponent } from './jl-pie.component';

describe('JlPieComponent', () => {
  let component: JlPieComponent;
  let fixture: ComponentFixture<JlPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JlPieComponent]
    });
    fixture = TestBed.createComponent(JlPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
