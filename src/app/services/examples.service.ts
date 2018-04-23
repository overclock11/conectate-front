import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG, AppConfig} from '../app.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Example} from '../models/example.models';

@Injectable()
export class ExamplesService {

  private url : string;
  private urlCreate: string;

  constructor(@Inject(APP_CONFIG) config: AppConfig, private http: HttpClient) {
    this.url =  config.apiEndpoint + 'tool/';
    this.urlCreate = config.apiEndpoint +"example/";
  }
  getExamples(toolId: number): Observable<any>{
    console.log("enviando peticion a ",this.url);
    return this.http.get(this.url+toolId+'/examples/');
  }
  addExample(example: Example): Observable<any> {
    return this.http.post(this.urlCreate, example);
  }
}
