import { inject, Injectable } from '@angular/core';
import { UserService } from '../../../services/user/user-service';
import { Observable } from 'rxjs';
import { UserResponse } from '../../../models/user/user-response';
import { AuthService } from '../../../services/auth/auth-service';

@Injectable({
  providedIn: 'root',
})
export class HeaderTopBarService {
  private readonly userService = inject(UserService);
  private readonly authService = inject(AuthService);

  getCurrentUser(): Observable<UserResponse> {
    return this.userService.getCurrentUser();
  }

  logout(): Observable<void> {
    return this.authService.logout();
  }
}
