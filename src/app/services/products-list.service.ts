import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';
import { catchError, map } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  private productsListServiceURL = "https://api.myjson.com/bins/fugjm";

  constructor(private http: HttpClient) { }

  fetchProductsList(): Observable<ProductCategory[]>{
    return this.http.get<Product[]>(this.productsListServiceURL)
                    .pipe(
                      map(resp => {return this.categorizeProductDetails(resp)}),
                      catchError(this.errorHandler)
                    );
  }

  fetchProductDetail(id: string): Observable<Product|boolean>{
    return this.http.get<Product[]>(this.productsListServiceURL)
                    .pipe(
                      map(resp => {return this.filterProduct(id, resp)}),
                      catchError(this.errorHandler)
                    )
  }

  categorizeProductDetails(productList: Product[]): ProductCategory[]{
    var sortedProductList = [];
    productList.forEach(product => {
      var productCategory = sortedProductList.find(function(categoryArr) {
        if(categoryArr.category.toLowerCase() === product.category.toLowerCase()){
          return categoryArr;
        }else{
          return false;
        }       
      });
      if(!productCategory){
        var tempCategory = {
          category: product.category.toLowerCase(),
          products : [product]
        }
        sortedProductList.push(tempCategory);
      }else{
        productCategory.products.push(product);
      }
    });
    return sortedProductList;
  }

  filterProduct(id: string, productsList: Product[]): Product|boolean{
    for(let i = 0; i < productsList.length; i++){
      let product = productsList[i];
      if(product._id === id){
       return product; 
      }
    }
    return false;
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message);
  }

}
