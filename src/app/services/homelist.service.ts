import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {APP_CONFIG, AppConfig} from '../app.config';

@Injectable()
export class HomelistService {
  public url: string;
  constructor(@Inject(APP_CONFIG) config: AppConfig, private http: HttpClient) {
    this.url =  config.apiEndpoint + 'tool/';
  }

  getTools(): Observable<any>{
    console.log("enviando peticion a ",this.url);
    return this.http.get(this.url);
  }

  getTool(id): Observable<any> {
    return this.http.get(this.url + id + '/');
  }
}
