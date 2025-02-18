import { environment } from './../../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owners } from '../interfaces/owners.interface';
import { Observable } from 'rxjs';
import { Owner } from '../interfaces/owner.interface';

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

  post(body: Owner): Observable<any> {
    return this.httpClient.post<any>(environment.ownersAPI, body);
  }

  put(body: Owner): Observable<Owner> {
    return this.httpClient.put<Owner>(`${environment.ownersAPI}/${body.id}`, body);
  }

  delete(id: string): Observable<Owner> {
    return this.httpClient.delete<Owner>(`${environment.ownersAPI}/${id}`);
  }

  getById(id: string): Observable<Owner> {
    return this.httpClient.get<Owner>(`${environment.ownersAPI}/${id}`);
  }
}
