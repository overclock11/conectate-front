import {  InjectionToken } from '@angular/core'

export interface AppConfig {
    apiEndpoint: string;
    title :string;
}


export const CONECTATE_CONFIG: AppConfig = {
    apiEndpoint: 'http://localhost:8000/api/',
    title: 'Conectate'
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
