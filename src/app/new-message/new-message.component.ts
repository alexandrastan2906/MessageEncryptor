import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EncryptService} from './encrypt.service';
import {Constants} from '../constant/constants';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  message: string;
  encryptForm: FormGroup;

  constructor(private form: FormBuilder, private service: EncryptService) {
  }

  ngOnInit(): void {
    this.encryptForm = this.form.group({
      message: this.form.control('', [Validators.required]),
      secret: this.form.control('', [Validators.required]),
    });
  }

  encrypt() {
    this.service.encrypt(this.encryptForm.get('message').value, this.encryptForm.get('secret').value).subscribe(resp => {
        // @ts-ignore
        this.message = (resp as Constants.Response).text;
      },
      error => {
        console.error(error.error.error);
      });
  }
}
