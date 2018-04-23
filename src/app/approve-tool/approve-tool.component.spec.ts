import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveToolComponent } from './approve-tool.component';

describe('ApproveToolComponent', () => {
  let component: ApproveToolComponent;
  let fixture: ComponentFixture<ApproveToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
