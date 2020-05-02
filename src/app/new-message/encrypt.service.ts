import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constant/constants';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor(private http: HttpClient) {
  }

  encrypt(message: string, secret: string) {
    const body = {
      message,
      token: secret,
      email: localStorage.getItem('email')
    };
    return this.http.post(Constants.API + '/encrypt', body, {observe: 'body'});
  }
}

