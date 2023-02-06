import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list', // -> <app-product-lít>...
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[] = [
    new Product('2365','Mecedes'),
    new Product('1652','Mazda'),
    new Product('4256','Suzuki')
  ]

  constructor() { }

  ngOnInit() {
  }

}
