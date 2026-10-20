import { inject, Injectable } from '@angular/core';
import { UserService } from '../user/user-service';
import { AuthService } from '../auth/auth-service';
import { UserResponse } from '../../models/user/user-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly userService = inject(UserService);
  private readonly authService = inject(AuthService);

  getCurrentUser(): Observable<UserResponse> {
    return this.userService.getCurrentUser();
  }

  logout(): Observable<void> {
    return this.authService.logout();
  }
}
