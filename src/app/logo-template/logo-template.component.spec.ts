import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTemplateComponent } from './logo-template.component';

describe('LogoTemplateComponent', () => {
  let component: LogoTemplateComponent;
  let fixture: ComponentFixture<LogoTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
