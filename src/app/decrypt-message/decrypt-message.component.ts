import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DecryptService} from './decrypt.service';
import {Constants} from '../constant/constants';

@Component({
  selector: 'app-decrypt-message',
  templateUrl: './decrypt-message.component.html',
  styleUrls: ['./decrypt-message.component.css']
})
export class DecryptMessageComponent implements OnInit {
  decryptForm: FormGroup;
  message: string;
  showErrorMessage = false;

  constructor(private form: FormBuilder, private service: DecryptService) {
  }

  ngOnInit(): void {
    this.decryptForm = this.form.group({
      message: this.form.control('', [Validators.required]),
      secret: this.form.control('', [Validators.required]),
      from: this.form.control('', [Validators.required])
    });
  }

  decrypt() {
    // tslint:disable-next-line:max-line-length
    this.service.decrypt(this.decryptForm.get('message').value, this.decryptForm.get('secret').value, this.decryptForm.get('from').value).subscribe(res => {
        // @ts-ignore
        this.message = (res as Constants.Response).text;
      },
      error => {
        console.error(error.error.error);
        this.showErrorMessage = true;
      });
  }
}
