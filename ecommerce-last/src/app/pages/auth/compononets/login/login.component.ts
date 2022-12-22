import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { AuthService, CartService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
   

  })

  sub$ = new Subject()

  constructor(
    private authSerive:AuthService,
    private cartService:CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.form.markAllAsTouched()
    if(this.form.invalid) return



    this.authSerive.login(this.form.value)
    
    .pipe(
      takeUntil(this.sub$),
      tap( res => {
        this.cartService.getCarts()
      })
    )
    .subscribe( res =>  {
      console.log(res)

      this.router.navigate(['/'])
    })
  }
  ngOnDestroy(): void {

    this.sub$.next(null)
    this.sub$.complete()
    
  }

}
