import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginregistermodalComponent } from './loginregistermodal.component';

describe('LoginregistermodalComponent', () => {
  let component: LoginregistermodalComponent;
  let fixture: ComponentFixture<LoginregistermodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginregistermodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginregistermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
