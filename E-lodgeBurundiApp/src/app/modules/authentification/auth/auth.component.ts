import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { takeUntil } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

password = '';
showPassword = false;
passwordType = 'password';
isLoading=false;
authForm:FormGroup;
 

  constructor( private authService : AuthService, ){
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
login() {
  const body = {
      email: this.authForm.value.username,
   password: this.authForm.value.password,
     
  };

  this.authService
      .login(body) .subscribe({
          next: (response) => {
              console.log(response);
              this.authForm.reset()
      
          },
          error: (msg) => {
              console.log('error', msg);

          },
      });
}


}
