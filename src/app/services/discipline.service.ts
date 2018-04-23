import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {APP_CONFIG, AppConfig} from '../app.config';

@Injectable()
export class DisciplineService {
  public url: string;
  constructor(@Inject(APP_CONFIG) config: AppConfig, private http: HttpClient) {
    this.url =  config.apiEndpoint + 'discipline/';
  }

  getDisciplines(): Observable<any>{
    return this.http.get(this.url);
  }
}
