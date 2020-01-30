
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDatabase } from 'src/app/interfaces/database-i';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  error_messages = {
    'email': [{
      type: 'required',
      message: 'Introduce tu correo electrónico.'
    },],
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
  constructor(public formBuilder: FormBuilder, public database: IDatabase, public router: Router) {
    this.registerForm = this.formBuilder.group({
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

  onSubmit() {
    this.database.signUp(this.registerForm.value.email, this.registerForm.value.password).then(() => {
      console.log('creado');
      this.router.navigate(['profile']);
    }).catch(() => {
      console.log('fallo');
    });

  }

}
