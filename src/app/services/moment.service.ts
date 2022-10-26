import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Moment } from '../component/Moment';

import { Response } from './../component/Resonse';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseUrl = environment.baseUrl;
  private apiUrl = `${this.baseUrl}/api/moments`;
  constructor(private http: HttpClient) { }

  ngInit(): void {
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
  updateMoment(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
  getAllMoments(): Observable<Response<any>> {
    return this.http.get<Response<any>>(this.apiUrl);
  }
  getMoment(id: number): Observable<Response<Moment>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Moment>>(url);
  }
  deleteMoment(id: any): Observable<Response<any>>{
    return this.http.delete<Response<any>>(`${this.apiUrl}/${id}`);
  }
}
