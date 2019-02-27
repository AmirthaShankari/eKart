import { Component, OnInit } from '@angular/core';
import { PRODUCTSLIST } from '../../data/productsList';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  searchProduct: string;
  productsList: Product[]; 

  constructor() {

  }

  ngOnInit() {
    this.productsList = PRODUCTSLIST;
  }

  handleProductDetailNavigation($event): void{
    console.log("parent handler navigation invoked" + JSON.stringify($event));
  }

}
