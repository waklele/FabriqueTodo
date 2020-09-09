import { Component, OnInit } from '@angular/core';
import { LoginsService } from './logins.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.page.html',
  styleUrls: ['./logins.page.scss'],
})
export class LoginsPage implements OnInit {

  public errorMessages = {
    user: [
      { type: 'required', message: 'Login failed' }
    ],
    pass: [ 
      { type: 'required', message: 'Login failed' }
    ]
  }

  get user() {
    return this.loginForm.get('user');
  }

  get pass() {
    return this.loginForm.get('pass');
  }

  private loginForm: FormGroup;

  constructor(private loginsService: LoginsService, private router: Router, private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      user: ['',
        [Validators.required,
        Validators.pattern('^[a-zA-Z]*'),
        ]
      ],
      pass: ['',
        [Validators.required,
        Validators.pattern('^[a-zA-Z]*')]
      ],
    });
  }

  ngOnInit() {
  }

  onLogin() {
    if (this.loginForm.value.user == "danny" && this.loginForm.value.pass == "fabrique") {
      this.loginsService.login();
    }
    else {
      
    }
  }
}
