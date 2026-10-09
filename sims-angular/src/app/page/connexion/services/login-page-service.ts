import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../../services/auth/auth-service';
import { LoginForm, LoginFormGroup } from '../../../models/forms/login-form';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../../models/connexion/login-response';
import { LoginRequest } from '../../../models/connexion/login-request';

@Injectable({
  providedIn: 'root',
})
export class LoginPageService {
  private readonly authService = inject(AuthService);

  buildFormGroup(): LoginFormGroup {
    return new FormGroup<LoginForm>({
      username: new FormControl<string | null>(null, Validators.required),
      password: new FormControl<string | null>(null, Validators.required),
    });
  }

  login(formGroup: LoginFormGroup): Observable<LoginResponse> {
    const request: LoginRequest = this._buildRequest(formGroup);
    return this.authService.login(request);
  }

  private _buildRequest(formGroup: LoginFormGroup): LoginRequest {
    return {
      username: formGroup.controls.username.value ?? '',
      password: formGroup.controls.password.value ?? '',
    };
  }
}
