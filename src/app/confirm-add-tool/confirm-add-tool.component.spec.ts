import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAddToolComponent } from './confirm-add-tool.component';

describe('ConfirmAddToolComponent', () => {
  let component: ConfirmAddToolComponent;
  let fixture: ComponentFixture<ConfirmAddToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAddToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAddToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
