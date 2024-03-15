import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
signUp= new FormGroup({
 username: new FormControl(''),
 firstname: new FormControl(''),

 lastname: new FormControl(''),

email: new FormControl(''),

 tel: new FormControl(''),

gender: new FormControl(''),

birthday: new FormControl(''),

 password1: new FormControl(''),

password2: new FormControl(''),

 picture: new FormControl(''),
})

  constructor(){
    //comment
  }
  ngOnInit(): void {
    
  }
}
