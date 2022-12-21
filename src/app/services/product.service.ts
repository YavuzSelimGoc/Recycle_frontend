import { ResponseModel_Data } from './../models/responseModel_Data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrls=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  add(product:Product){
    let newPath=this.apiUrls+"Products/add";
    return this.httpClient.post(newPath,product)
   }
   getCategory():Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrls+"Products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }
  getCategoryActive():Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrls+"Products/getallActive";
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }
  getCategoryById(productID:number):Observable <ResponseModel_Data<Product>> {
    let newPath=this.apiUrls + "Products/GetById/?id="+productID
    return this.httpClient
       .get<ResponseModel_Data<Product>>(newPath);
   }
  delete(product:Product){
    let newPath=this.apiUrls + "Products/delete"
    return this.httpClient.post(newPath,product)
   }
   passive(product:Product){
    let newPath=this.apiUrls + "Products/passive"
    return this.httpClient.post(newPath,product)
   }
   update(product:Product){
    let newPath=this.apiUrls+"Categories/update";
    return this.httpClient.post(newPath,product)
   }
   active(product:Product){
    let newPath=this.apiUrls + "Products/active"
    return this.httpClient.post(newPath,product)
   }
}
