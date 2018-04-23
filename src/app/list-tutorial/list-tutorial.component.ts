import { Component, OnInit, Input } from '@angular/core';
import { Tutorial} from '../models/tutorial.models';
import { TutorialService } from '../services/tutorial.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AddTutorialComponent } from '../add-tutorial/add-tutorial.component';


@Component({
  selector: 'app-list-tutorial',
  providers : [TutorialService],
  templateUrl: './list-tutorial.component.html',
  styleUrls: ['./list-tutorial.component.css']
})
export class ListTutorialComponent implements OnInit {

  @Input() idTool : number;

  public TutorialList: Tutorial[];
  private tutorial: Tutorial;
  private titleDialog: string ;  
  private allowEdit: boolean;
  private widthMaxRow: number;

  constructor(private tutorialService: TutorialService, public dialog: MatDialog) {
    this.TutorialList  = [];
  }

  ngOnInit() {
    this.getTutoriales();
    this.widthMaxRow = this.TutorialList.length * 250;
  }

  getTutoriales () {
    this.tutorialService.getTutorials(this.idTool).subscribe(
      result => {        
          this.TutorialList = result;          
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  addTutorial(): void {
    this.titleDialog = 'Agregar';
    this.allowEdit = true;
    this.tutorial = new Tutorial();
    this.tutorial.tool = this.idTool;
    this.openDialog();
  }

  editTutorial(tutorials:  Tutorial) {
    this.titleDialog = 'Editar';
    this.allowEdit = true;
    this.tutorial = tutorials;
    this.openDialog();
  }

  showTutorial(tutorials:  Tutorial) {
    this.titleDialog = 'Ver';
    this.allowEdit = false;
    this.tutorial = tutorials;
    this.openDialog();
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(AddTutorialComponent, {
      width: '40%',
      height: '65%',
      data: { action: this.titleDialog, tutorial: this.tutorial, allowEdit: this.allowEdit}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (this.titleDialog != 'Ver'){
        this.getTutoriales();
      }
      console.log(dialogRef);
    });
  }

}

const ELEMENT_Tutorial: Tutorial[] = [
  {id: 6, name: 'Como usar la herramienta', objective  :"These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the CSS float property. !important is included to avoid specificity issues. These use the same viewport breakpoints as our grid system", tool :1, url: "https://material.angular.io/components/expansion/overview" },
  {id: 7, name: 'Agregar una tarea', objective  :"manejar la información", tool :1, url: "https://material.angular.io/components/expansion/overview"  },
  {id: 8, name: 'Probando informacion',  objective  :"manejar la información", tool :1, url: "https://material.angular.io/components/expansion/overview"  },
  {id: 7, name: 'Agregar una tarea', objective  :"manejar la información", tool :1, url: "https://material.angular.io/components/expansion/overview"  },  
  {id: 6, name: 'Como usar la herramienta', objective  :"These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the CSS float property. !important is included to avoid specificity issues. These use the same viewport breakpoints as our grid system", tool :1, url: "https://material.angular.io/components/expansion/overview" }
];
