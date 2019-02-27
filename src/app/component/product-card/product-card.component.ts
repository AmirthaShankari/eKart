import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() public productDetail;
  @Output() public productClickEmitter = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
    console.log(this.productDetail);
  }

  handleProductClick(productDetail: Product): void{
    alert(JSON.stringify(productDetail));
    this.productClickEmitter.emit(productDetail);
  }

}
