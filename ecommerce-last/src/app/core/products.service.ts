import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './interfaces';
import { BaseService } from './services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {

  getProducts(params:{
    categoryId?:number,
    limit?:number,
    search?:string
  }): Observable<Product[]>{
    return this.get<Product[]>('product', params)
  }


}
