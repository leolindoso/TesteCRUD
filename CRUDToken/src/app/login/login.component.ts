import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  loginDone: boolean = false;
  loginFailed: boolean = false;
  
  constructor(private authService: AuthService){

  }
  async LoginButton(){
    console.log(this.email);
    this.loginDone = true;
    console.log("Antes de chamar authService.login");
    await this.authService.Login(this.email,this.password);
    console.log("depois de chamar authService.login");
    this.loginFailed = !this.authService.IsLogged;
    console.log(this.loginFailed)
  }
  ngOnInit() {
  }

}
