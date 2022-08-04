import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConstantClass } from 'src/app/constants/constants';
import { CommonService } from 'src/app/services/common/common.service';
import { Regex } from 'src/app/utils/regex';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public constant;

  validationMessages = {
    email: [
      { type: 'required', message: 'MESSAGE.REQUIRED' },
      { type: 'pattern', message: 'MESSAGE.EMAIL_PATTERN' },
    ],
    password: [
      { type: 'required', message: 'MESSAGE.REQUIRED' },
      { type: 'pattern', message: 'MESSAGE.EMAIL_PATTERN' },
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public commonService: CommonService,
  ) {
    this.constant = ConstantClass;
    this.initializeForm();
  }

  ngOnInit(): void {}

  initializeForm() {
    this.constant.loginForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.pattern(Regex.emailPattern)],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern(Regex.passwordPattern)],
      ],
    });
  }

  get _loginForm() {
    return this.constant.loginForm.controls;
  }

  onSubmit() {
    Swal.fire({
      icon: 'success',
      title: this.commonService.getTranslateData('MESSAGE.SUCCESS_LOGIN'),
      showConfirmButton: false,
    })

    localStorage.setItem('loggedIn', btoa(this.constant.loginForm.value.email));
    this.router.navigate(['home']);
    this.commonService.isLoggedIn = atob(localStorage.getItem('loggedIn') || '');
    console.log(this.constant.loginForm.value);
  }
}
