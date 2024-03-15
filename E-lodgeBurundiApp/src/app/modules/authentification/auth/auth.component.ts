import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

password = '';
showPassword = false;
passwordType = 'password';

authForm:FormGroup;

  constructor(){
    this.authForm= new FormGroup({
      username:new FormControl('', Validators.required),
      password: new FormControl('' , Validators.required)
    })
  }
ngOnInit(): void {
  //
}
changePasswordType() {
  if (!this.showPassword) {
      this.showPassword = true;
      this.passwordType = 'text';
  } else {
      this.showPassword = false;
      this.passwordType = 'password';
  }
}

}
