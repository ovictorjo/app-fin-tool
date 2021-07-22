import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RequestCreate, ResponseCreate, ResponseInputs} from "./input.model";

@Injectable({
  providedIn: 'root'
})

export class InputService {

  private url = "/api/inputs/cadastrar";

  constructor(private http: HttpClient) { }

  getInputs(): Observable<ResponseInputs>{
    return this.http.get<ResponseInputs>(this.url)
  }
  

  
  createInput(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request);
  }

}
