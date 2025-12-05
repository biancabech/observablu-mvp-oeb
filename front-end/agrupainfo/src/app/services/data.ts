import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getEmpresas(): Observable<any> {
    return this.http.get<any>('/mock-db/empresas.json');  
  }

  getEmpregos(): Observable<any> {
    return this.http.get<any>('/mock-db/empregos.json');   
  }

  getIndicadores(): Observable<any> {
    return this.http.get<any>('/data/indicadores.json');   
  }
}