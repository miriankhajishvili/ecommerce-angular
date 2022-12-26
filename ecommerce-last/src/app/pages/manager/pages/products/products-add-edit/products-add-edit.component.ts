import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Category } from 'src/app/core/interfaces';
import { CategoryService, ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-products-add-edit',
  templateUrl: './products-add-edit.component.html',
  styleUrls: ['./products-add-edit.component.scss']
})
export class ProductsAddEditComponent  implements OnInit{
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required)
  })


  categories$: Observable<Category[]> = this.caregoryService.getAll()

  constructor(
    private caregoryService: CategoryService,
    private productService: ProductsService,
    private route : ActivatedRoute,
    private router: Router
  ){}

 
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']){
          return this.productService.getOne(params['id'])
        }
        return of(null)
      })
    ).subscribe( res => {
      if (res) {
        this.form.patchValue({
          ...res,
          categoryId: res.category.id
        })
      }
    })
    
  }


  submit(){
    if(this.form.invalid){
      return
    }

    if(this.form.value.id){
      this.productService.update(this.form.value.id, this.form.value)
      .pipe()
      .subscribe( res => {
        this.form.reset()

        this.router.navigate(['/manager/products'])
        .then(()=>{
          this.form.reset()
        })
      })

    } else {
      this.productService.create(this.form.value)
      .pipe()
      .subscribe( res => {
        this.router.navigate(['/manager/products'])
        .then(()=>{
          this.form.reset()
        })
      })

      
    }


  }

}
