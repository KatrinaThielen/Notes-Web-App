import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../services/helper.service';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private server: HelperService, private fb: FormBuilder){}

  ngOnInit(): void {}

  registerForm = this.fb.group({
    username:['',[Validators.required]],
    password:['', Validators.required],
    confirmPassword:['', Validators.required]
    },{
    validators: this.confirmValidator()
  })
  // confirmValidator applied to confirmPassword input field to check if password and confirmPassword are the same value
  confirmValidator(): ValidatorFn{
    return(control:AbstractControl): ValidationErrors =>{
      var error: any;
      // if password value and confirmPassword value are not equivalent, make error true
      if(control.value.password != control.value.confirmPassword){
        error = {"matchingError": true}
      }
      return error;
    }
  }
  // submit formGroup value formatted to be input into data.json file
  onSubmit(register: any){
    let user = {
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
    }
    this.server.register(user).subscribe(query=>{
      if (query){
        this.router.navigate(['login']);
      }
      else {
        alert('Unable to successfully register user.')
      }
    })
  }
}

