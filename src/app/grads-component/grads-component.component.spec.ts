import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradsComponentComponent } from './grads-component.component';

describe('GradsComponentComponent', () => {
  let component: GradsComponentComponent;
  let fixture: ComponentFixture<GradsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
