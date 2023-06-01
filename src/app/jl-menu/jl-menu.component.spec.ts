import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JlMenuComponent } from './jl-menu.component';

describe('JlMenuComponent', () => {
  let component: JlMenuComponent;
  let fixture: ComponentFixture<JlMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JlMenuComponent]
    });
    fixture = TestBed.createComponent(JlMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
