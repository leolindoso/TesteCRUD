
import { User } from './User';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  Users: any;
  loggedUser: User;
  IsLogged: boolean = false;

  URL:string = "http://localhost:3000/login";

  constructor(private http:HttpClient) {

    this.Users = new Array();
   }
  NgOnInit(){
    this.Users.push(new User("1","Leonardo Lindoso","leo7lindoso@hotmail.com","123456",true));
  }


  async Login(email,password){
    console.log("Antes de dar get");
    await this.http.post(this.URL,{
      "id": 0,
      "name": "",
      "email": email,
      "password":password
    })

    for(let user of this.Users){
      if(this.IsLogged){
        break;
      }else{
        console.log(user.email);
        console.log(user.password);
        if(email == user.email){
          if(password == user.password){
              this.loggedUser = user;
              console.log("LoggedUser: " +this.loggedUser.email);
              this.IsLogged = true;
          }
        }
      }
      
    }
    console.log("depois de dar get");
  }

  getUsers() : any{

    return  this.Users;
  }

}
