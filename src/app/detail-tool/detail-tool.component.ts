import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'
import {Tool} from '../models/tool.models';
import {ToolService} from '../services/tool.service';
import {AddDrafExamplesComponent} from '../add-draf-examples/add-draf-examples.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-detail-tool',
  providers : [ToolService],
  templateUrl: './detail-tool.component.html',
  styleUrls: ['./detail-tool.component.css']
})
export class DetailToolComponent implements OnInit {

  private tool : Tool;
  private title : string = "Detalle de herramienta";

  constructor(public dialog: MatDialog) {
    this.tool = new Tool();
    this.tool.id =1;
    this.tool.name  = "Moodlle";
    this.tool.description = "es una herramienta de gestión de aprendizaje (LMS), " +
               "o más concretamente de Learning Content Management (LCMS), de distribución libre," +
               "escrita en PHP1​. Está concebida para ayudar a los educadores a crear comunidades de "+
               "aprendizaje en línea2​, Moodle es usada en blended learning, educación a distancia, "+
               " clase invertida y diversos proyectos de e-learning en escuelas, universidades, oficinas "+
               " y otros sectores3​4​. La versión más reciente es la 3.5.";
    this.tool.state = "Borrador";
    this.tool.licenseType = "Libre";
    this.tool.urlDownload = "https://www.unitecvirtual.edu.co/mod/page/view.php?id=36250";
    this.tool.urlSite  = "https://moodleinstitucional.uniandes.edu.co/login/index.php";

  }

  ngOnInit() {

  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddDrafExamplesComponent, {
      width: '50%',
      height: '90%',
      data: { title: 'Moodle - foros', id: 1}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(dialogRef);
    });
  }
}
