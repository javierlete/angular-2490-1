import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JlLabelinputComponent } from './jl-labelinput.component';

describe('JlLabelinputComponent', () => {
  let component: JlLabelinputComponent;
  let fixture: ComponentFixture<JlLabelinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JlLabelinputComponent]
    });
    fixture = TestBed.createComponent(JlLabelinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
