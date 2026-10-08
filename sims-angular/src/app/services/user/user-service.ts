import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { UserResponse } from '../../models/user/user-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = '/user';
  private refresh$: Subject<void> = new Subject<void>();

  private readonly http = inject(HttpClient);

  public refresh() {
    this.refresh$.next();
  }

  public getCurrentUser(): Observable<UserResponse> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<UserResponse>(this.apiUrl + '/me')),
    );
  }
}
