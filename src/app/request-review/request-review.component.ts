import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Tool} from '../models/tool.models';
import {ToolService} from '../services/tool.service';

@Component({
  selector: 'app-request-review',
  providers: [ToolService],
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  private tool: Tool;
  private title: string = "Detalle de herramienta";
  private admin: Boolean = false;

  private loadingPublish: Boolean = true;
  private errorMessage: Boolean = true;

  private idTool: number;

  constructor(private route: ActivatedRoute, private toolService: ToolService, public router: Router) {
    this.tool = new Tool();
  }


  ngOnInit() {

    this.route.params.subscribe(params => {
      this.idTool = params['id'];
    });

    this.getDetail();

    let sesion = sessionStorage.getItem('login');
    if (sesion) {
      this.admin = true;
    }
    
  }

    getDetail() {
    this.toolService.get(this.idTool).subscribe(
      result => {
        this.tool = result;        
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  publishTool() {
    this.loadingPublish = true;
    let stateAndId = {
      "state": "Publicado",
      "id": this.idTool,
      "name":this.tool.name,
      "description": this.tool.description
    };
    console.log(stateAndId);
    this.toolService.publish(stateAndId).subscribe(() => {
      this.router.navigate(['tool/lista']);
      this.loadingPublish = false;
    }, (err) => {
      console.log(err);
      this.errorMessage = false;
    });
  }

}
