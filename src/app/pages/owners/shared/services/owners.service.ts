import { environment } from './../../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owners } from '../interfaces/owners.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(page:number, pageSize:number, filter?:string, fields?:string, sort?:string): Observable<Owners> {
    const parameters = new HttpParams()
      .append('page', page ? page.toString() : '')
      .append('pageSize', pageSize ? pageSize.toString() : '')
      .append('FILTER', filter ? filter : '')
      .append('FIELDS', fields ? fields : '')
      .append('SORT', sort ? sort : 'id')
    return this.httpClient.get<Owners>(environment.ownersAPI, { params: parameters })
  }
}
