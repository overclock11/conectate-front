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
  private showSlider: boolean = false;

  constructor(private tutorialService: TutorialService, public dialog: MatDialog) {
    this.TutorialList  = [];
  }

  ngOnInit() {
    this.getTutoriales();            
  }

  getTutoriales () {
    this.tutorialService.getTutorials(this.idTool).subscribe(
      result => {        
          this.TutorialList = result;    
          this.widthMaxRow = this.TutorialList.length * 260;             
          this.showSlider = (this.widthMaxRow > 960);
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

  nextClick():void{
    document.getElementById('contenedorTutorial').scrollLeft += 900;    
  }

  previousClick(): void{
    document.getElementById('contenedorTutorial').scrollLeft -= 900;
  }
}
