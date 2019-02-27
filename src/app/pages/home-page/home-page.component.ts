import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../models/ProductCategory';
import { ProductsListService } from 'src/app/services/products-list.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  searchProduct: string;
  productsList: ProductCategory[]; 
  isServerError: boolean;

  constructor(private _productsListService : ProductsListService) {

  }

  ngOnInit() {
    this._productsListService.fetchProductsList()
      .subscribe(
        (data) => { this.productsList = data },
        (err) => { this.isServerError = true; console.log(err) }
      )
  }

  handleProductDetailNavigation($event): void{
    console.log("parent handler navigation invoked" + JSON.stringify($event));
  }

}
