import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantClass } from 'src/app/constants/constants';
import { CommonService } from 'src/app/services/common/common.service';
import { Regex } from 'src/app/utils/regex';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public constant;

  validationMessages = {
    firstName: [
      { type: 'required', message: 'MESSAGE.REQUIRED' },
      { type: 'minlength', message: 'MESSAGE.NAME_MIN_LENGTH' },
    ],
    lastName: [
      { type: 'required', message: 'MESSAGE.REQUIRED' },
      { type: 'minlength', message: 'MESSAGE.NAME_MIN_LENGTH' },
    ],
    email: [
      { type: 'required', message: 'MESSAGE.REQUIRED' },
      { type: 'pattern', message: 'MESSAGE.EMAIL_PATTERN' },
    ],
    phoneNumber: [
      { type: 'required', message: 'MESSAGE.REQUIRED' },
      {
        type: 'minlength',
        message: 'MESSAGE.PHONE_MIN_LENGTH',
      },
      { type: 'maxlength', message: 'MESSAGE.PHONE_MAX_LENGTH' },
      { type: 'pattern', message: 'MESSAGE.NUMERIC_PATTERN' },
    ],
    education: [{ type: 'required', message: 'MESSAGE.REQUIRED' }],
    experience: [
      { type: 'required', message: 'MESSAGE.REQUIRED' },
      { type: 'min', message: 'MESSAGE.EXPERIENCE_MIN' },
      { type: 'maxlength', message: 'MESSAGE.EXOERIENCE_MAX_LENGTH' },
      { type: 'pattern', message: 'MESSAGE.NUMERIC_PATTERN' },
    ],
    city: [{ type: 'required', message: 'MESSAGE.REQUIRED' }],
    state: [{ type: 'required', message: 'MESSAGE.REQUIRED' }],
    zip: [
      { type: 'required', message: 'MESSAGE.REQUIRED' },
      { type: 'minlength', message: 'MESSAGE.ZIP_MIN_LENGTH' },
      { type: 'maxlength', message: 'MESSAGE.ZIP_MAX_LENGTH' },
      { type: 'pattern', message: 'MESSAGE.NUMERIC_PATTERN' },
    ],
  };

  constructor(private formBuilder: FormBuilder, public commonService : CommonService) {
    this.constant = ConstantClass;
    this.initializeForm();
  }

  ngOnInit(): void { }

  initializeForm() {
    this.constant.userProfileForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(Regex.emailPattern)]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(Regex.numericPattern),
        ],
      ],
      education: ['', [Validators.required]],
      experience: [
        '',
        [
          Validators.required,
          Validators.pattern(Regex.numericPattern),
          Validators.min(1),
          Validators.maxLength(2),
        ],
      ],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: [
        '',
        [
          Validators.required,
          Validators.pattern(Regex.numericPattern),
          Validators.minLength(4),
          Validators.maxLength(8),
        ],
      ],
    });
  }

  get _userProfileForm() {
    return this.constant.userProfileForm.controls;
  }

  myValidationFunction(event: any) {
    try {
      let k;
      if (/^[0-9]*$/.test(event.key)) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  onSubmit(){
    console.log(this.constant.userProfileForm.value);
  }
}
