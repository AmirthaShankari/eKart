import { Component, OnInit } from '@angular/core';
import { ProductsListService } from 'src/app/services/products-list.service';
import { Product } from '../../models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  productId: string;
  productDetail: Product|Boolean;
  isProductFound: Boolean = false;

  constructor(private _productsListService: ProductsListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this._productsListService.fetchProductDetail(this.productId)
                              .subscribe(
                                data => {this.productDetail = data; if(data){this.isProductFound = true}},
                                err => console.log(err)
                              )
  }

}
