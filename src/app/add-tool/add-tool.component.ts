import { Component, OnInit } from '@angular/core';
import { Tool } from '../models/tool.models';
import { OperativeSystems } from '../models/operative-systems.models';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ToolService } from '../services/tool.service';
import { NgForm, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ConfirmAddToolComponent } from '../confirm-add-tool/confirm-add-tool.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tool',
  providers : [ToolService],
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css']
})
export class AddToolComponent implements OnInit {
  
  public tool : Tool;
  private title: string;
  private systems : OperativeSystems[] = [];
  private systemSel = new FormControl();

  configsnackBar = new MatSnackBarConfig();  

  constructor(private toolService:ToolService, public snackBar: MatSnackBar, 
              public dialog: MatDialog, private router: Router) {
    this.tool = new Tool();
    this.tool.systems = ELEMENT_DATA;
    this.title = "Agregar herramienta";
    this.systems = ELEMENT_DATA;
  }

  onSubmit(f: NgForm){     
    
    if (f.invalid){      
      this.snackBar.open("Por favor ingrese los datos requeridos. ", "Validación", this.configsnackBar)
      return;
    }
        
    this.toolService.add(this.tool).subscribe(
      result =>{        
        this.tool.id = result.id;    
        this.openDialog();                   
      }, 
      error => {
        this.snackBar.open("Error al guardar datos de la herramienta", "Error", this.configsnackBar)
        console.log(<any>error);
      }
      
    );
  }

   
  openDialog(): void {
    let dialogRef = this.dialog.open(ConfirmAddToolComponent, {
      width: '25%',
      height: '40%',
      data: { name: this.tool.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      let editTool = result;
      if (editTool){
        this.router.navigate(['/tool/'+ this.tool.id + "/detail"]);
      }
    });
  }


  ngOnInit() {
    this.configsnackBar.verticalPosition = 'bottom';
    this.configsnackBar.horizontalPosition = 'center';
    this.configsnackBar.duration = 7000;
  }

}

const ELEMENT_DATA: OperativeSystems[] = [
  {id: 6, name: 'Windows' },
  {id: 7, name: 'Mac OS' },
  {id: 8, name: 'Linux' }
];
