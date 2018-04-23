import { Component, OnInit , Inject } from '@angular/core';
import { Tutorial } from '../models/tutorial.models';
import { TutorialService } from '../services/tutorial.service';
import { NgForm } from '@angular/forms';
import { error } from 'util';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-add-tutorial',
  providers : [TutorialService],
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  public tutorial:  Tutorial;
  private action: string;
  private allowEdit: Boolean; 
  configsnackBar = new MatSnackBarConfig();

  constructor(private tutorialService: TutorialService, private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddTutorialComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.tutorial = new Tutorial();
    this.action = this.data.action;
    this.tutorial = this.data.tutorial;
    this.allowEdit = this.data.allowEdit;

    this.configsnackBar.verticalPosition = 'bottom';
    this.configsnackBar.horizontalPosition = 'center';
    this.configsnackBar.duration = 7000;
  }

  onSubmit(f: NgForm) {
    if (f.invalid) {
      this.snackBar.open('Por favor ingrese los datos requeridos. ', 'Validación', {
        duration : 5000
      });
      return;
    }

    if (this.action == "Editar"){

      this.tutorialService.updateTutorial(this.tutorial).subscribe(
        result => {
          this.snackBar.open('Datos actualizados correctamente. ', 'Hecho', this.configsnackBar);          
        },
        error => {
          this.snackBar.open('Error al actualizar datos del tutorial', 'Error', this.configsnackBar);
          console.log(<any>error);
        }
      );

    } else if (this.action == "Agregar"){
      this.tutorialService.addTutorial(this.tutorial).subscribe(
        result => {
          this.snackBar.open('Datos guardados correctamente. ', 'Hecho', this.configsnackBar);
          this.tutorial = new Tutorial();
        },
        error => {
          this.snackBar.open('Error al guardar datos del tutorial', 'Error', this.configsnackBar);
          console.log(<any>error);
        }
      );
    }  
  }
}
