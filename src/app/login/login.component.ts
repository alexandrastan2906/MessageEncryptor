import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import { faCloud, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  envIcon = faEnvelope;
  cloudIcon = faCloud;
  keyIcon = faKey;
  showErrorMessage = false;

  constructor(private form: FormBuilder, private service: LoginService, private router: Router) {
    this.loginForm = this.form.group({
      email: this.form.control('', [Validators.required]),
      password: this.form.control('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.service.login(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(data => {
      const response = data.body as Response;
      if (response.success) {
        localStorage.setItem('userID', response.id);
        localStorage.setItem('name', response.name);
        localStorage.setItem('email', this.loginForm.get('email').value);
        this.router.navigate(['']);
      } else {
        console.error('Invalid login');
        this.showErrorMessage = true;
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }

}

export interface Response {
  success: string;
  name: string;
  id: string;
}
