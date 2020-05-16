import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTempleteComponent } from './button-templete.component';

describe('ButtonTempleteComponent', () => {
  let component: ButtonTempleteComponent;
  let fixture: ComponentFixture<ButtonTempleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTempleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
