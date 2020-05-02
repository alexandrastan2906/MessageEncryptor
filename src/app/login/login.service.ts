import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constant/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    const data = {
      email,
      password
    };
    return this.http.post(Constants.API + '/login', data, {observe: 'response'});
  }
}
