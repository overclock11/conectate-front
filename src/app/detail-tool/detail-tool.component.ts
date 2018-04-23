import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Tool} from '../models/tool.models';
import {ToolService} from '../services/tool.service';


@Component({
  selector: 'app-detail-tool',
  providers: [ToolService],
  templateUrl: './detail-tool.component.html',
  styleUrls: ['./detail-tool.component.css']
})
export class DetailToolComponent implements OnInit, OnDestroy {


  private tool: Tool;
  private title: string = "Detalle de herramienta";
  private admin: Boolean = false;
  private git: Boolean = false;

  private loadingPublish: Boolean = true;
  private loadingReview: Boolean = true;
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

    let asesor= sessionStorage.getItem('accedido');
    if (asesor) {
      this.git = true;
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

  reviewTool() {
    this.loadingReview = true;
    let stateAndId = {
      "state": "Revisado",
      "id": this.idTool,
      "name":this.tool.name,
      "description": this.tool.description
    };
    console.log(stateAndId);
    this.toolService.review(stateAndId).subscribe(() => {
      this.router.navigate(['tool/drafts']);
      this.loadingReview = false;
    }, (err) => {
      console.log(err);
      this.errorMessage = false;
    });
  }

  ngOnDestroy(){

    sessionStorage.setItem('accedido', '');
    sessionStorage.setItem('login', '');
    this.admin=false;
    this.git=false;
  }

}

