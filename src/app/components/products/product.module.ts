import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ItemComponent } from './item/item.component';
import { ToastrModule } from 'ngx-toastr';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { SharedCardComponent } from 'src/app/shared/shared-card/shared-card.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
const routes: Routes = [
  { path: '', component: ProductsComponent },
  {path:'item/:id',component:ItemComponent},
  {path:'allproducts/:cate_name',component:AllproductsComponent}

]

@NgModule(
  {
    declarations: [
      ProductsComponent,
      AdminViewComponent,
      UserViewComponent,
      ItemComponent,
      AllproductsComponent,
      SharedCardComponent

    ],
    imports: [
      RouterModule.forChild(routes),
      CommonModule,
      MatTableModule,
      MatPaginatorModule,
      HttpClientModule,
      MatTooltipModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatDialogModule,
      ReactiveFormsModule,
      ToastrModule.forRoot(),
      TranslateModule.forChild({
        loader: {
            provide: TranslateLoader,
            useFactory: createtranslate,
            deps: [HttpClient]
        }
      }),
    ],

  })

export class ProductModule {}
export function createtranslate(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
