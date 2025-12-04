import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getEmpresas(): Observable<any> {
    return this.http.get<any>('assets/data/empresas.json');
  }

  getEmpregos(): Observable<any> {
    return this.http.get<any>('assets/data/empregos.json');
  }

  getIndicadores(): Observable<any> {
    return this.http.get<any>('assets/data/indicadores.json');
  }
}
