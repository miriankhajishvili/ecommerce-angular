import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),

  })

  constructor(
    private authSerive:AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  submit(){
    this.form.markAllAsTouched()
    if(this.form.invalid) return

    

    this.authSerive.register(this.form.value).subscribe( res =>  {
      this.router.navigate(['/auth/login'])
      
    })
  }

}
