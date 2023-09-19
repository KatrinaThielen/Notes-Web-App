import { Component } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private server: HelperService, private router: Router){}

onLogin(login: any){
 
  let input = {
    username: login.controls.username.value,
    password: login.controls.password.value,
  }

  let verified = false;

  this.server.login().subscribe((data)=>{
    for(let i=0; i<data.length; i++){
      // if password is matched with USER in data.json, verified set to true
      if(input.username === data[i].username && input.password === data[i].password){
        verified = true;
      } 
    }
    // if verified is true, send user to /home page 
    if(verified){
      this.router.navigate(['home']);
    } 
    // if verified is false, send user an error alert message
    else { 
      alert('Error! User does not exist or password is not correct. Please try again.')
    } 
  }); 
}
}
