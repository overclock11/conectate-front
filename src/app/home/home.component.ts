import { Component, OnInit } from '@angular/core';
import {HomelistService} from "../services/homelist.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  providers:[HomelistService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public toolsObject:any[]=[];
  public filterargs: String ="";
  public strategyFilter: String ="";
  public visibilityHome: Boolean;

  constructor(public toolList: HomelistService,private router: Router) {
  }

  ngOnInit() {
    if(this.router.url==='/home'){
      //mostrar datos del home
      this.visibilityHome = true;
      this.toolList.getTools().subscribe(
        result => {
          this.toolsObject = result;
          this.toolsObject = this.toolsObject.filter((currentElement) => {
            if(currentElement.state.toLowerCase() === "publicado"){
              return currentElement;
            }
          });
          console.log(this.toolsObject);
        },
        error => {
          console.log(<any>error);
        }
      );
    }
    else if(this.router.url==='/tool/lista'){
      // traer las que tienen estado por aprobar
      this.visibilityHome = false;
      sessionStorage.setItem('login', '{"user":"Tony","id":"12"}');
      this.toolList.getTools().subscribe(
        result => {
          this.toolsObject = result;
          this.toolsObject = this.toolsObject.filter((currentElement) => {
            if(currentElement.state.toLowerCase() === "revisado"){
              return currentElement;
            }
          });
          console.log(this.toolsObject);
        },
        error => {
          console.log(<any>error);
        }
      );
    }

    else{
      // traer las que tienen estado por aprobar
      this.visibilityHome = false;
      sessionStorage.setItem('accedido', '{"user":"Camilo","id":"2"}');
      this.toolList.getTools().subscribe(
        result => {
          this.toolsObject = result;
          this.toolsObject = this.toolsObject.filter((currentElement) => {
            if(currentElement.state.toLowerCase() === "borrador"){
              return currentElement;
            }
          });
          console.log(this.toolsObject);
        },
        error => {
          console.log(<any>error);
        }
      );
    }
  }

  filterData(filter,keyCode){
    if (keyCode === 13  && filter.toString() !== '') {
      this.toolList.getTools().subscribe(
        result => {
          let filterByName: any[] = result.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
          let filterByKeyWords: any[] = result.filter(item => item.keyWords.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
          let results = filterByName.concat(filterByKeyWords);
          let hash = {};
          results = results.filter((current) => {
            let exists = !hash[current.id] || false;
            hash[current.id] = true;
            return exists;
          });
          this.toolsObject = results;
        },
        error => {
          console.log(<any>error);
        }
      );
    } else if (keyCode === 13 && filter.toString() === '' ){
      this.toolList.getTools().subscribe(
        result => {
          this.toolsObject = result;
          console.log(this.toolsObject);
        },
        error => {
          console.log(<any>error);
        }
      );
    }
  }
}
