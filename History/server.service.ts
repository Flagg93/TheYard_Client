import { Injectable,Component } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private serverAddress:string = "https://localhost:32768/api/";
  constructor(public http:HttpClient) { }

  getRequest(objectType: string, id:number = -1){
    let req:string = this.serverAddress + objectType;
    if(id != -1){
      req += "/" + id;
    }
    return this.http.get(req,{observe:'response'});
  }

  postRequest(objectType: string, body: string):Observable<HttpResponse<any>>{
    let req:string = this.serverAddress + objectType;
    return this.http.post(req,body,{observe:'response'});
  }
}
