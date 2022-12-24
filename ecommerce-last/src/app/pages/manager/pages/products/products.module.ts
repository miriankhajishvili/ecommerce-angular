import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsAddEditComponent } from './products-add-edit/products-add-edit.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsAddEditComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
