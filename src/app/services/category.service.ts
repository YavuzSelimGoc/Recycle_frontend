import { ResponseModel_Data } from './../models/responseModel_Data';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrls=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  add(category:Category){
    let newPath=this.apiUrls+"Categories/add";
    return this.httpClient.post(newPath,category)
   }
   getCategory():Observable<ListResponseModel<Category>>{
    let newPath=this.apiUrls+"Categories/getall";
    return this.httpClient.get<ListResponseModel<Category>>(newPath)
  }
  getCategoryActive():Observable<ListResponseModel<Category>>{
    let newPath=this.apiUrls+"Categories/getallActive";
    return this.httpClient.get<ListResponseModel<Category>>(newPath)
  }
  getCategoryById(categoryID:number):Observable <ResponseModel_Data<Category>> {
    let newPath=this.apiUrls + "Categories/GetById/?id="+categoryID
    return this.httpClient
       .get<ResponseModel_Data<Category>>(newPath);
   }
  delete(category:Category){
    let newPath=this.apiUrls + "Categories/delete"
    return this.httpClient.post(newPath,category)
   }
   passive(category:Category){
    let newPath=this.apiUrls + "Categories/passive"
    return this.httpClient.post(newPath,category)
   }
   update(category:Category){
    let newPath=this.apiUrls+"Categories/update";
    return this.httpClient.post(newPath,category)
   }
   active(category:Category){
    let newPath=this.apiUrls + "Categories/active"
    return this.httpClient.post(newPath,category)
   }
}
