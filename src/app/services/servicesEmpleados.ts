import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable()
export class ServiceEmpleados {
  url = environment.urlApi;

  constructor(private _http: HttpClient) {}

  async loginEmpleado(user: Login): Promise<any> {
    let req = 'auth/login';
    let json = JSON.stringify(user);
    let header = new HttpHeaders().set('content-type', 'application/json');
    return firstValueFrom(this._http.post(this.url + req, json, { headers: header }));
  }

  async getPerfilEmpleado(): Promise<Empleado> {
    let req = 'api/empleados/perfilempleado';
    let token = sessionStorage.getItem('TOKEN');
    let header = new HttpHeaders().set('Authorization', 'bearer ' + token);
    return firstValueFrom(this._http.get<Empleado>(this.url + req, { headers: header }));
  }

  async getSubordinadosAsync(): Promise<Empleado[]> {
    let request = 'api/empleados/subordinados';
    let token = sessionStorage.getItem('TOKEN');
    let header = new HttpHeaders().set('Authorization', 'bearer ' + token);
    return firstValueFrom(this._http.get<Empleado[]>(this.url + request, { headers: header }));
  }
}
