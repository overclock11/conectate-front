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
      sessionStorage.setItem('login', '{"user":"Tony","id":"12"}');
      this.toolsObject = [{
        'id': 1,
        'name': 'Dannie',
        'keyWords': 'HFC',
        'technicalDetails': 'Macedonian',
        'description': 'Ardea golieth'
      }, {
        'id': 2,
        'name': 'Mead',
        'keyWords': 'Client Relations',
        'technicalDetails': 'Georgian',
        'description': 'Sciurus niger'
      }, {'id': 3, 'name': 'Drucy', 'keyWords': 'ICD-9-CM', 'technicalDetails': 'Irish Gaelic', 'description': 'Mycteria ibis'}, {
        'id': 4,
        'name': 'Yolanda',
        'keyWords': 'Estate Jewelry',
        'technicalDetails': 'Oriya',
        'description': 'Phalacrocorax brasilianus'
      }, {'id': 5, 'name': 'Eleen', 'keyWords': 'PFI', 'technicalDetails': 'Hindi', 'description': 'unavailable'}, {
        'id': 6,
        'name': 'Ilyssa',
        'keyWords': 'On-Set VFX Supervision',
        'technicalDetails': 'Swahili',
        'description': 'Antidorcas marsupialis'
      }, {'id': 7, 'name': 'Donica', 'keyWords': 'DMEDI', 'technicalDetails': 'Catalan', 'description': 'Cordylus giganteus'}, {
        'id': 8,
        'name': 'Ashlan',
        'keyWords': 'End User Training',
        'technicalDetails': 'Kurdish',
        'description': 'Damaliscus lunatus'
      }, {
        'id': 9,
        'name': 'Lindi',
        'keyWords': 'Shared Services',
        'technicalDetails': 'Hungarian',
        'description': 'Grus canadensis'
      }, {'id': 10, 'name': 'Vally', 'keyWords': 'Honeywell DCS', 'technicalDetails': 'Mongolian', 'description': 'Toxostoma curvirostre'}];
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
