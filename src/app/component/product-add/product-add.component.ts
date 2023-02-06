import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;

  constructor() {
    this.productForm = new FormGroup({
      'productCode': new FormControl(''),
      'productName': new FormControl('') 
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}
