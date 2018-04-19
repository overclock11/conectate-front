import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG, AppConfig} from '../app.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Example} from '../models/example.models';

@Injectable()
export class ExamplesService {

  private url : string;

  constructor(@Inject(APP_CONFIG) config: AppConfig, private http: HttpClient) {
    this.url =  config.apiEndpoint + 'example';
  }

  addExample(example: Example): Observable<any> {
    let params = JSON.stringify(example);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url, params, {headers: headers});
  }
}
