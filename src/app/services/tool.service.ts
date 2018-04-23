import { Injectable, Inject } from '@angular/core';
import {APP_CONFIG, AppConfig} from '../app.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tool} from '../models/tool.models';

@Injectable()
export class ToolService {

  private url : string;
  constructor(@Inject(APP_CONFIG) config:AppConfig, private http: HttpClient) {
    this.url =  config.apiEndpoint + "tool"
  }

  get(toolId: number): Observable<any>{
    return this.http.get(this.url + "/"+ toolId + "/");
  }

  add(tool: Tool): Observable<any>{
    let data  = JSON.stringify(tool);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url + "/", data, {headers: headers});
  }

  put(tool: Tool): Observable<any>{
    let data  = JSON.stringify(tool);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put(this.url + "/" + tool.id, data, {headers: headers});
  }

  publish(stateAndId): Observable<any>{
    console.log(this.url + "/" + stateAndId.id);
    return this.http.put(this.url + "/" + stateAndId.id+"/", stateAndId);
  }

  review(stateAndId): Observable<any>{
    console.log(this.url + "/" + stateAndId.id);
    return this.http.put(this.url + "/" + stateAndId.id+"/", stateAndId);
  }
}
