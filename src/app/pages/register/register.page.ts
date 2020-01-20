import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loginForm: FormGroup;

  error_messages = {
    'email': [{
      type: 'required',
      message: 'Introduce tu correo electrónico.'
    }, ],
    'password': [{
        type: 'required',
        message: 'Introduce tu contraseña.'
      },
      {
        type: 'minlength',
        message: 'Longitud de contraseña incorrecto.'
      },
      {
        type: 'maxlength',
        message: 'Longitud de contraseña incorrecto.'
      }
    ],
    'confirmpassword': [{
        type: 'required',
        message: 'Introduce tu contraseña.'
      },
      {
        type: 'minlength',
        message: 'Longitud de contraseña incorrecto.'
      },
      {
        type: 'maxlength',
        message: 'Longitud de contraseña incorrecto.'
      }
    ],
  }
  constructor(public formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    }, { 
      validators: this.password.bind(this)
    });
  }

  ngOnInit() {
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

}