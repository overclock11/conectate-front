import {Component, OnInit, Input} from '@angular/core';
import {AddDrafExamplesComponent} from '../add-draf-examples/add-draf-examples.component';
import {MatDialog} from '@angular/material';
import {Example} from '../models/example.models';
import {ExamplesService} from "../services/examples.service";


@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.css'],
  providers: [ExamplesService]
})
export class ListExampleComponent implements OnInit {

  @Input() idTool: number;

  public exampleList: Example[];

  constructor(private dialog: MatDialog, private exampleService: ExamplesService) {
  }

  ngOnInit() {
    this.getExamples();
  }

  getExamples() {
    this.exampleService.getExamples(this.idTool).subscribe(
      result => {
        this.exampleList = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  showExample(example: Example) {
    this.openDialog(example, false);
  }

  editExample(example: Example) {
    this.openDialog(example, true);
  }

  openDialog(example: Example, edit: Boolean): void {
    let dialogRef = this.dialog.open(AddDrafExamplesComponent, {
      width: '50%',
      height: '90%',
      data: {
        title: 'Moodle - foros',
        id: this.idTool,
        example: example,
        edit: edit
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getExamples();
    });
  }

}
