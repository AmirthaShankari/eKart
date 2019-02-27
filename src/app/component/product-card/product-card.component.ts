import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { PRODUCTSLIST } from '../../data/productsList';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  private productsDetailList: Product[];
  public productDetail;

  public productNameClass;

  constructor() { }

  ngOnInit() {
    this.productsDetailList = PRODUCTSLIST;
  }

  handleProductClick(productDetail: Product): void{
    alert(JSON.stringify(productDetail));
  }

}
