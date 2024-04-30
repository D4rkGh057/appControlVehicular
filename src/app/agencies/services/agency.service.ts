import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from '../model/agencie.model';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  url='/api/agencias/';
  constructor(
    private http: HttpClient
  ) {}

  loadAgencies():Observable<Agency>{
    return this.http.get<Agency>(this.url);
  }

  addAgency(agency:Agency):Observable<Agency>{
    return this.http.post<Agency>(this.url,agency);
  }

  updateAgency(id:string,agency:Agency):Observable<Agency>{
    return this.http.put<Agency>(this.url+id,agency)
  }

  deleteAgency(id:string):Observable<Agency>{
    return this.http.delete<Agency>(this.url+id);
  }
}
