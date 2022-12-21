import { ResponseModel_Data } from './../models/responseModel_Data';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { Transfer } from './../models/Transfer';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  apiUrls=environment.apiUrl+"Transfer/";
  constructor(private httpClient:HttpClient) { }

  add(transfer:Transfer){
    let newPath=this.apiUrls+"add";
    return this.httpClient.post(newPath,transfer)
   }
   getCategory():Observable<ListResponseModel<Transfer>>{
    let newPath=this.apiUrls+"getall";
    return this.httpClient.get<ListResponseModel<Transfer>>(newPath)
  }
  getCategoryById(transferID:number):Observable <ResponseModel_Data<Transfer>> {
    let newPath=this.apiUrls + "GetById/?id="+transferID
    return this.httpClient
       .get<ResponseModel_Data<Transfer>>(newPath);
   }
  delete(transfer:Transfer){
    let newPath=this.apiUrls + "delete"
    return this.httpClient.post(newPath,transfer)
   }
   update(transfer:Transfer){
    let newPath=this.apiUrls+"update";
    return this.httpClient.post(newPath,transfer)
   }

}
