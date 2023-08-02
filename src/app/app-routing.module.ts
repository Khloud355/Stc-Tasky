import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentcation/login/login.component';
import { AuthGuard } from './core/guard/auth.guard';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () =>
   import('./components/products/product.module')
    .then(m => m.ProductModule)
 } ,

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
