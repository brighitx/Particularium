import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IDatabase } from 'src/app/interfaces/database-i';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {
  passwordForm: FormGroup;

  error_messages = {
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
    this.passwordForm = this.formBuilder.group({
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
    this.database.updatePasswordUser(this.passwordForm.value.password);
    alert('contraseña cambiada');
    this.router.navigate(['stream']);
  }
}
