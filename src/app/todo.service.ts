import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TODOService {

  private baseUrl = 'http://localhost:8000/listapp';

  constructor(private http: HttpClient) { }

  createTODO(TODO: Object): Observable<object> {
    return this.http.post(`${this.baseUrl}/`, TODO);
  }

  getTODOList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  updateTODO(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteTODO(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
