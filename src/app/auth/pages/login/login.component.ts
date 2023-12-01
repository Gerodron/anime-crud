import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  constructor(private lg: FormBuilder, private router : Router, private _snackBar: MatSnackBar) {
    this.login=this.lg.group({
      user:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar(){
   const user = this.login.value.user;
   const password = this.login.value.password;

   if( user == 'admin' && password == 123){
    this.router.navigate(['/animes/'])
   }else{

    this.errorLogin()
    this.login.reset()
   }
  }

  errorLogin(){
    this._snackBar.open('usuario o contraseña incorrectos', '', {
      duration:5000,
      horizontalPosition: 'right',
        verticalPosition: 'top'
    })
  }
}
