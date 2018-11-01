import { User } from './Users';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUDToken';

  Users : User[];

  email: string = "";
  password: string = "";

  loginDone: boolean = false;
  loginFailed: boolean = false;
  
  constructor(private authService: AuthService){

  }
  LoginButton(){
    console.log(this.email);
    this.loginDone = true;
    this.loginFailed = !this.authService.Login(this.email,this.password);
    console.log(this.loginFailed)
  }

}
