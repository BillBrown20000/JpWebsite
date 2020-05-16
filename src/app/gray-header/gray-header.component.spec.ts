import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayHeaderComponent } from './gray-header.component';

describe('GrayHeaderComponent', () => {
  let component: GrayHeaderComponent;
  let fixture: ComponentFixture<GrayHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrayHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrayHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
