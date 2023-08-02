import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatPaginator,
  MatPaginatorIntl,
} from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { ProductserService } from '../productser.service';
// import { ToastrService } from 'ngx-toastr';

export interface PeriodicElement {
  title: number;
  category: string;
  price: '';
  rating: number;
}
@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent implements AfterViewInit, OnInit {
  url: any;
  text = 'khloud';
  editFlag: boolean=false
  editDatavar: any;
  constructor(
    private toastr: ToastrService,
    private Productser: ProductserService,
    private formBuilder: FormBuilder
  ) {}
  modeldata = 'exampleModal';
  show = 'exampleModal';
  productData: any;
  name: any;
  animal: any;
  title: any;
  category: any;
  price: any;
  desc: any;
  image: any;
 myProductList =[];
  displayedColumns: string[] = [
    'title',
    'category',
    'price',
    'rating',
    'actions',
  ];
  dataSource = new MatTableDataSource(this.myProductList);
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );
  ngOnInit(): void {
    this.getmyproducts()
    this.productData = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      Price: ['', Validators.required],
      image: [''],
      desc: [''],
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  deleteProduct(id: any) {
    this.Productser.deleteProducts(id).subscribe(
      (res: any) => {
        this. toastr.success('deleted');
        this.getmyproducts()
      },
      (error: any) => {

      }
    );
  }
  imageSrc: any;
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
        console.log(this.url);
        this.imageSrc = this.url;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  editData(item: any) {
    this.editDatavar = item
    this.editFlag = true
    console.log("we edit data");

    (this.title = item.title),
      (this.category = item.category),
      (this.price = item.price),
      (this.desc = item.description);
    this.text = this.image;
    let data = {
      title: this.title,
      price: this.price,
      description: this.desc,
      image: this.text,
      category: this.category,
    };
    this.Productser.updateProduct(data, item.id).subscribe(
      (res: any) => {
        console.log(res);
        this.getmyproducts()
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  add(){
    this.editFlag=false
    console.log(this.editFlag)
  }
 edit(data:any){
   this.editFlag=true
   console.log(this.editFlag)
 }

  AddItem() {
    if(this.editFlag == false){
      console.log("we add data")
    let item = {
      title: this.productData.value.title,
      price: this.productData.value.Price,
      description: this.productData.value.desc,
      image: this.imageSrc,
      category: this.productData.value.category,
    };
    console.log(item)
    this.Productser.Addproduct(item).subscribe(
      (res: any) => {
        console.log(res);
        this.getmyproducts()
      },
      (error: any) => {
        console.log(error);
      }
    );
    }else{
      this.editData(this.editDatavar)
    }
  }
  close() {
    this.productData.reset();
  }
  getmyproducts() {

    this.Productser.getProducts().subscribe((res: any) => {
      this.myProductList = res;
      console.log(res)
    });
  }
}

