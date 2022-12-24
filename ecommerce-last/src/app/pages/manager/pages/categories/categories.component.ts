import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/interfaces';
import { CategoryService } from 'src/app/core/services';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = []

  constructor(
    private categoryService : CategoryService
  ){}

  ngOnInit(): void {
    this.getAll()
    
  }

  getAll(){
    this.categoryService.getAll()
    .pipe()
    .subscribe( res => {
      this.categories = res
    })
  }

  deleteItem(id:number){
    this.categoryService.deleteItem(id)
    .pipe()
    .subscribe( res => {
      this.getAll()
    })
  }

}
 