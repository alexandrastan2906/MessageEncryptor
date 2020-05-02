import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constant/constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  register(name: string, email: string, password: string) {
    const data = {
      name,
      email,
      password
    };
    return this.http.post(Constants.API + '/register', data, {observe: 'response'});
  }
}
