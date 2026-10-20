import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { finalize, Observable, of, tap } from 'rxjs';
import { LoginRequest } from '../../models/connexion/login-request';
import { LoginResponse } from '../../models/connexion/login-response';
import { RegisterRequest } from '../../models/connexion/register-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = '/auth';
  private readonly tokenKey = 'token';

  private readonly http = inject(HttpClient);

  register(request: RegisterRequest): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/register`, request);
  }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login`, request)
      .pipe(tap((response) => localStorage.setItem(this.tokenKey, response.token)));
  }

  logout(): Observable<void> {
    const token = this.getToken();

    if (!token) {
      return of();
    }

    return this.http
      .post<void>(
        `${this.apiUrl}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .pipe(
        finalize(() => {
          this.removeToken();
        }),
      );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
