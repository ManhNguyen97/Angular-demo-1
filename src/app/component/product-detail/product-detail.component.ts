import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
// import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute) {
    this.product = new Product('','');
     if(route.snapshot.params['id']) {
      this.product.productCode = route.snapshot.params['id'];
     }
  }

  ngOnInit() {
  }

}
