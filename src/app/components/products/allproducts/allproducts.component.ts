import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserService } from '../productser.service';
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  routee: any;

constructor(private route: ActivatedRoute, private service: ProductserService) {
  }
allproducts:any
  ngOnInit(): void {
    this.routee = this.route.snapshot.url[1].path

    this.gotoAllproduct()
  }
  gotoAllproduct() {
    this.service.getProductsOfCategory(this.routee).subscribe((res: any) => {
      this.allproducts = res

    })
  }
}
