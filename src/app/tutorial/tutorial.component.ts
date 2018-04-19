import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'
import { Tutorial} from '../models/tutorial.models'
import { TutorialService } from '../services/tutorial.service';
import { NgForm } from '@angular/forms';
import { error } from 'util';
import { MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-tutorial',
  providers : [TutorialService],
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  IdHerramienta: number;
  public TutorialList : Tutorial[];
  public tutorial:  Tutorial;
  public agregaTutorial: boolean = false; 


  constructor(private ruta:ActivatedRoute, private tutorialService:TutorialService, 
    public snackBar: MatSnackBar) {
      this.tutorial =  new Tutorial();
      this.TutorialList  = ELEMENT_Tutorial;
   }


  onSubmit(f: NgForm){     
    
    if (f.invalid){      
      this.snackBar.open("Por favor ingrese los datos requeridos. ", "Validación", {
        duration : 5000
      })
      return;
    }
    
    this.tutorial.toolId =  this.IdHerramienta;
    this.tutorialService.addTutorial(this.tutorial).subscribe(
      result =>{
        this.snackBar.open("Datos guardados correctamente. ", "Hecho", {
          duration : 5000
        })
        this.tutorial = new Tutorial();
        this.getTutoriales();
        this.agregaTutorial =false;
      }, 
      error => {
        this.snackBar.open("Error al guardar datos del tutorial", "Error", {
           duration :5000
        })
        console.log(<any>error);
      }
      
    );
  }

  getTutoriales (){
    this.tutorialService.getTutorial(this.IdHerramienta).subscribe(
      result => {
          this.TutorialList = result;              
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  ngOnInit() {
    this.ruta.params.subscribe( parametro=> {
      this.IdHerramienta=parametro['id'];      
    })    
    this.getTutoriales();
  }

}

const ELEMENT_Tutorial: Tutorial[] = [
  {id: 6, name: 'Como usar la herramienta', objective  :"These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the CSS float property. !important is included to avoid specificity issues. These use the same viewport breakpoints as our grid system", toolId :1, url: "https://material.angular.io/components/expansion/overview" },
  {id: 7, name: 'Agregar una tarea', objective  :"manejar la información", toolId :1, url: "https://material.angular.io/components/expansion/overview"  },
  {id: 8, name: 'Probando informacion',  objective  :"manejar la información", toolId :1, url: "https://material.angular.io/components/expansion/overview"  },
  {id: 7, name: 'Agregar una tarea', objective  :"manejar la información", toolId :1, url: "https://material.angular.io/components/expansion/overview"  },  
  {id: 6, name: 'Como usar la herramienta', objective  :"These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the CSS float property. !important is included to avoid specificity issues. These use the same viewport breakpoints as our grid system", toolId :1, url: "https://material.angular.io/components/expansion/overview" }
];
