import { Component, OnInit } from '@angular/core';
import { ProductserService } from '../products/productser.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  role: any;
  adminview: any = false;
  userview: any = false;
  constructor(private Productser: ProductserService) {}
  ngOnInit(): void {

    this.role = localStorage.getItem('role');
    if (this.role == 'user') {
      this.userview = true;
    } else if (this.role == 'admin') {
      this.adminview = true;
    }
  }

}
