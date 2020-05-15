import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTempleteComponent } from './navbar-templete.component';

describe('NavbarTempleteComponent', () => {
  let component: NavbarTempleteComponent;
  let fixture: ComponentFixture<NavbarTempleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarTempleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
