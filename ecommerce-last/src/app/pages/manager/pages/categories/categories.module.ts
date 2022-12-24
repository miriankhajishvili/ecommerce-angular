import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryAddEditComponent } from './category-add-edit/category-add-edit.component';
import { CategoriesComponent } from './categories.component';


@NgModule({
  declarations: [
    CategoryAddEditComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
