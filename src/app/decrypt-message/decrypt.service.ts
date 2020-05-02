import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constant/constants';

@Injectable({
  providedIn: 'root'
})
export class DecryptService {

  constructor(private http: HttpClient) {
  }

  decrypt(message: string, secret: string, from: string) {
    const body = {
      message,
      token: secret,
      email: from
    };
    return this.http.post(Constants.API + '/decrypt', body, {observe: 'body'});
  }
}
