import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { 
    //comment
  }
 login(body: any) {
    const url = '/accounts/token/';
    return this.apiService
        .post(url, body)
        .pipe(map((response) => response));
}
}
