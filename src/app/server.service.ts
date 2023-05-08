import { Injectable,Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

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
    return this.http.get(req);
  }

  postRequest(objectType: string, body: string){
    let req:string = this.serverAddress + objectType;
    return this.http.post(req,body);
  }
}
