import { User } from './Users';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Users : User[];
  loggedUser: User;

  constructor() {
    this.Users = Array();
    this.Users.push(new User("999","Leonardo Lindoso","leo7lindoso@hotmail.com","123456",true));
   }


  Login(email,password){
    
    for(let user of this.Users){
      if(email == user.email){
        if(password == user.password){
            this.loggedUser = user;
            return true;
        }
      }
    }
  }

}
