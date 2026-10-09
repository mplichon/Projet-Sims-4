import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginRequest } from '../../models/connexion/login-request';
import { LoginResponse } from '../../models/connexion/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = '/auth';
  private readonly tokenKey = 'token';

  private readonly http = inject(HttpClient);

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login`, request)
      .pipe(tap((response) => localStorage.setItem(this.tokenKey, response.token)));
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
