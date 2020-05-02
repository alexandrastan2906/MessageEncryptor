import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from './register.service';
import {Router} from '@angular/router';
import {faKey, faEnvelope, faUserSecret} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  envIcon = faEnvelope;
  keyIcon = faKey;
  userIcon = faUserSecret;

  constructor(private form: FormBuilder, private service: RegisterService, private router: Router) {
    this.registerForm = this.form.group({
      name: this.form.control('', [Validators.required]),
      email: this.form.control('', [Validators.required]),
      password: this.form.control('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  register() {
    this.service.register(this.registerForm.get('name').value, this.registerForm.get('email').value,
      this.registerForm.get('password').value).subscribe( data => {
      const response = data.body as Response;
      if (response.success) {
        this.router.navigate(['login']);
      } else {
        console.error('Invalid register');
      }

    });
  }

}

export interface Response {
  success: string;
}
