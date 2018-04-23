import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {APP_CONFIG, AppConfig} from '../app.config';

@Injectable()
export class PedagogicStrategyService {
  public url: string;
  constructor(@Inject(APP_CONFIG) config: AppConfig, private http: HttpClient) {
    this.url =  config.apiEndpoint + 'pedagogic_strategy/';
  }

  getPedagogicStrategy(): Observable<any>{
    return this.http.get(this.url);
  }

  getPedagogicStrategyById(id): Observable<any> {
    return this.http.get(this.url + id + '/');
  }
}
