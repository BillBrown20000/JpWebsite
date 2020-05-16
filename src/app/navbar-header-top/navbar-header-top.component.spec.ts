import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHeaderTopComponent } from './navbar-header-top.component';

describe('NavbarHeaderTopComponent', () => {
  let component: NavbarHeaderTopComponent;
  let fixture: ComponentFixture<NavbarHeaderTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarHeaderTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarHeaderTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
