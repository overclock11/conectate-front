import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import { Inject } from '@angular/core';
import { Example } from '../models/example.models';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {ExamplesService} from '../services/examples.service';


@Component({
  selector: 'app-add-draf-examples',
  templateUrl: './add-draf-examples.component.html',
  styleUrls: ['./add-draf-examples.component.css'],
  providers : [Example, ExamplesService],

})
export class AddDrafExamplesComponent implements OnInit {
  public invoiceForm: FormGroup;
  public hideContent: Boolean = true;
  public errorMessage: String;
  public buttonMessage: String = 'Guardar borrador';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public newExample: Example, private _fb: FormBuilder, public exampleService: ExamplesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });
    console.log(this.data);
  }
  initItemRows() {
    return this._fb.group({
      name: [''],
      link: ['']
    });
  }
  addItem(): void {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    control.push(this.initItemRows());
  }
  deleteRow(index: number) {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    control.removeAt(index);
  }
  buildAndSend() {
    this.hideContent = false;
    this.errorMessage ="";
    this.buttonMessage ="Guardar borrador";

    if (this.invoiceForm.value.itemRows[0].name === '') {
      this.newExample.resources= [];
    }
    else{
      this.newExample.resources =this.invoiceForm.value.itemRows;
    }
    this.exampleService.addExample(this.newExample).subscribe((data) => {
      console.log(data);
      this.dialog.closeAll();
    }, (err) => {
      this.buttonMessage ="Reintentar";
      this.errorMessage = 'Ocurrio un error almacenando los datos Status: '+ err.status+ " Mensaje: " + err.message;
    });
    console.log(this.newExample);
  }
}

