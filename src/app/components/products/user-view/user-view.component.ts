import { Component, OnInit } from '@angular/core';
import { ProductserService } from '../productser.service';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  products: any=[]
  signleItem: any

  constructor(private service: ProductserService) { }
  categoryarr: any = [];
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {

    this.service.getAllCategories().subscribe((res: any) => {
      this.categoryarr = res;
      this.products= [
        {
          name: String,
          arr: [],
        },
      ];
      for (let val of this.categoryarr) {
        this.service.getProductsOfCategory(val).subscribe((res: any) => {
          if (res) {

            this.products.push({ name: val, arr: res });

          }
        });
      }
    });
  }
//
}
