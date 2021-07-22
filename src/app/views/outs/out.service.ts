import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RequestCreate, ResponseCreate, ResponseOuts} from "./out.model";

@Injectable({
  providedIn: 'root'
})

export class OutsService {

  private url = "/api/outs/cadastrar";

  constructor(private http: HttpClient) { }

  getInputs(): Observable<ResponseOuts>{
    return this.http.get<ResponseOuts>(this.url)
  }



  createInput(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request);
  }

}
