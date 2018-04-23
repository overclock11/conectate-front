import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrafExamplesComponent } from './add-draf-examples.component';

describe('AddDrafExamplesComponent', () => {
  let component: AddDrafExamplesComponent;
  let fixture: ComponentFixture<AddDrafExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDrafExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDrafExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
