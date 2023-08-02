import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductserService {
  api_url = environment.API_URL;
  constructor(private http: HttpClient) { }
  getProducts(){
 return this.http.get(this.api_url+ 'products')
  }
  deleteProducts(id:any){
    return this.http.delete(this.api_url + `products/${id}`)
  }
  Addproduct(data:any){
    return this.http.post(this.api_url + 'products',data)
  }
  updateProduct(data:any,id:any){
    return this.http.put(this.api_url+`products/${id}`,data)
  }
  getAllCategories(){
    return this.http.get(this.api_url +'products/categories')
  }
  getProductsOfCategory(cate_name:any){
    return this.http.get(this.api_url+ `products/category/${cate_name}`)

  }
  singleProduct(id:any){
    return this.http.get(this.api_url+`products/${id}`)
  }
}
