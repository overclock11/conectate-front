import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial }  from '../models/tutorial.models'



@Injectable()
export class TutorialService {
  private url : string;
  private urlTool : string;

  constructor(@Inject(APP_CONFIG) config:AppConfig, private http: HttpClient) {
    this.url =  config.apiEndpoint + "tutorial/"
    this.urlTool =  config.apiEndpoint + "tool/";
  }

  get(id: number): Observable<any>{
    return this.http.get(this.url + id + "/");    
  }

  getTutorials(idTool :number): Observable<any>{
    return this.http.get(this.urlTool + idTool + "/tutorials/");      
  }    
  
  addTutorial(tutorial: Tutorial): Observable<any>{
    let data  = JSON.stringify(tutorial);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url, data, {headers: headers});
  }

  updateTutorial(tutorial: Tutorial): Observable<any>{
    let data  = JSON.stringify(tutorial);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put(this.url + tutorial.id + "/", data, {headers: headers});
  }

}
