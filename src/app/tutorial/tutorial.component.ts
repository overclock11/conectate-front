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
      //this.TutorialList  = ELEMENT_Tutorial;
   }


  
  

  ngOnInit() {
  
  }

}


