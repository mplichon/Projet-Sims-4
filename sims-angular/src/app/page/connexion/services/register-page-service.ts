import { inject, Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../../../models/connexion/register-request';
import { RegisterForm, RegisterFormGroup } from '../../../models/forms/register-form';
import { AuthService } from '../../../services/auth/auth-service';

@Injectable({
  providedIn: 'root',
})
export class RegisterPageService {
  private readonly authService = inject(AuthService);

  buildFormGroup(): RegisterFormGroup {
    return new FormGroup<RegisterForm>(
      {
        username: new FormControl<string | null>(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]),
        password: new FormControl<string | null>(null, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(72),
        ]),
        confirmationPassword: new FormControl<string | null>(null, Validators.required),
      },
      { validators: [passwordMatchValidator] },
    );
  }

  register(formGroup: RegisterFormGroup): Observable<{ message: string }> {
    const request: RegisterRequest = this._buildRequest(formGroup);
    return this.authService.register(request);
  }

  private _buildRequest(formGroup: RegisterFormGroup): RegisterRequest {
    return {
      username: formGroup.controls.username.value ?? '',
      password: formGroup.controls.password.value ?? '',
    };
  }
}

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmationPassword = control.get('confirmationPassword')?.value;
  const isDifferentPasswords = password !== confirmationPassword;
  return isDifferentPasswords ? { passwordMismatch: true } : null;
}
