import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Operator} from "../components/operator-list/operator-list.component";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private http: HttpClient) { }

  addOperator(operator: Operator): Observable<Operator> {
  return this.http.post<Operator>(`${environment.CONNECTION_URL}`, operator);
  }

  listOperators(): Observable<any>{
    return this.http.get(`${environment.CONNECTION_URL}`).pipe(map(
      response => {
        return response;
      }
    ));
  }

  delete(id: number) {
    return this.http.delete(`${environment.CONNECTION_URL}/${id}`)
  }

  getOperatorById(id: number) {
  return this.http.get(`${environment.CONNECTION_URL}/${id}`)
  }

  updateOperator( name: string, team: string) {
  return this.http.put(`${environment.CONNECTION_URL}`, {name, team})
  }
}
