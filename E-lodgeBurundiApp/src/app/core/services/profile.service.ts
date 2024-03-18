
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apiService: ApiService) { 
    //comment
  }
  getProfils() {
    const url = '/accounts/profile';
    return this.apiService.get(url).pipe(
        map((data: any) => {
            return data;
        })
    );
}

}