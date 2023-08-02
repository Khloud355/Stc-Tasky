import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData:any;
  adminRole:boolean=false
  userRole:boolean = false
adminobj=
  {
    username:'admin',
    password:'admin',
  }
  userobj={
    username:'user',
    password:'user',

  }

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.loginData = this.formBuilder.group({
      username:["", Validators.required],
      password:["", Validators.required],

        })
  }
  onSubmit(){
    let data = {
      username:this.loginData.value.username,
      password:this.loginData.value.password
    }
    if (JSON.stringify(data) === JSON.stringify(this.adminobj)) {
      // 👇️ this runs
      console.log('✅ this.admin');

      this.adminRole=true
      localStorage.setItem('role','admin')
      this.userRole=false
      this.router.navigate(['/products'])
    } else if(JSON.stringify(data) === JSON.stringify(this.userobj)) {
      console.log('⛔️ this is user');
      this.adminRole=false

      this.userRole=true
      localStorage.setItem('role','user')
      this.router.navigate(['/products'])
    }else{
      console.log("erroroor")
      this.adminRole=false
      this.userRole=false
      localStorage.setItem('role','')
      this.router.navigate(['/'])
    }

  }


}
