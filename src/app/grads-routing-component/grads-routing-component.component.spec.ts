import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradsRoutingComponentComponent } from './grads-routing-component.component';

describe('GradsRoutingComponentComponent', () => {
  let component: GradsRoutingComponentComponent;
  let fixture: ComponentFixture<GradsRoutingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradsRoutingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradsRoutingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
