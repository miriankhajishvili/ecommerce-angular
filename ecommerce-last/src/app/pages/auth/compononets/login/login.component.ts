import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    private authSerive:AuthService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.form.markAllAsTouched()
    if(this.form.invalid) return



    this.authSerive.login(this.form.value).subscribe( res =>  {
      console.log(res)
    })
  }

}
