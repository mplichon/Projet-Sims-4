import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginEventService {
  loginAction = signal<boolean>(false);

  triggerLoginAction() {
    this.loginAction.update((value) => !value);
  }
}
