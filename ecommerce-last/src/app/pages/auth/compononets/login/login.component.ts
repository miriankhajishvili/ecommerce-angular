import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
   

  })

  constructor(
    private authSerive:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.form.markAllAsTouched()
    if(this.form.invalid) return



    this.authSerive.login(this.form.value).subscribe( res =>  {
      console.log(res)
      this.router.navigate(['/'])
    })
  }

}
