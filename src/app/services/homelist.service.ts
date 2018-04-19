import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HomelistService {
  // ejemplo para servicios https://victorroblesweb.es/2017/11/06/httpclient-en-angular-5-ejemplos-servicios-ajax-rest/

  constructor(public http: HttpClient) { }
  public url:string ="http://localhost:8000/tools/";

  getTools(): Observable<any>{
    return this.http.get(this.url);
  }

  getTool(id) : Observable<any> {
    return this.http.get(this.url + id + '/')
  }


}
