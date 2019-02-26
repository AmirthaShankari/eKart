import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  private productsDetailList: [Product] = [{
    _id: "5c2afa5bfb6fc00eee894150",
    name: "Blue Lehenga",
    inStock: false,
    imageUrl: "https://rukminim1.flixcart.com/image/880/1056/jm573ww0/lehenga-choli/4/w/n/free-mdl19-define-jewellery-original-imaf948fythg85yp.jpeg?q=50",
    brand: "Saara",
    category: "Women",
    rating: 4,
    price: 370,
    description: "This is a blue and pink lehenga with 3/4th sleeve and round neck, suitable for women under 5.5 feet",
    size: "M",
    color: "Blue"
  }]

  public productDetail = this.productsDetailList[0];

  constructor() { }

  ngOnInit() {
    
  }

}
