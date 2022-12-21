import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  url = "Product";
  
  constructor(private http: HttpClient) {  }

  public getProducts() : Observable<ProductModel[]> {
      return this.http.get<ProductModel[]>(`${environment.apiUrl}/${this.url}`);
     // return this.http.get<ProductModel[]>(`${environment.apiUrl}/Product`);
  }
}
