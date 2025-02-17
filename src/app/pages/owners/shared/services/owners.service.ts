import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
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

  get(): Observable<Owners> {
    return this.httpClient.get<Owners>(environment.ownersAPI)
  }
}
