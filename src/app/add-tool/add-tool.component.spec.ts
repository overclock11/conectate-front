import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AddToolComponent } from './add-tool.component';
import { By } from '@angular/platform-browser';

describe('AddToolComponent', () => {
  let component: AddToolComponent;
  let fixture: ComponentFixture<AddToolComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement= fixture.debugElement.query(By.css('h2'));
    htmlElement = debugElement.nativeElement;
  });

  it('should create a Tool draf ', () => {
    expect(htmlElement.textContent).toEqual('Agregar Herramienta');
  });
});
