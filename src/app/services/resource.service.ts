import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG, AppConfig} from '../app.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {resource} from "selenium-webdriver/http";

@Injectable()
export class ResourceService {

  private url: string;

  constructor(@Inject(APP_CONFIG) config: AppConfig, private http: HttpClient) {
    this.url =  config.apiEndpoint + 'resource/many/';
  }
  addResource(resource): Observable<any> {
    debugger;
    return this.http.post(this.url, resource);
  }
}
