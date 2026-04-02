import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { TypeAspirationDTO } from '../models/aspiration/type-aspiration-dto';
import { AspirationLegerDTO } from '../models/aspiration/aspiration-leger-dto';

@Injectable({
  providedIn: 'root',
})
export class AspirationService {
  private apiUrl = '/aspiration';
  private apiGestionUrl = this.apiUrl + '/gestion';
  private apiSelectionUrl = this.apiUrl + '/selection';
  private refresh$: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {}

  public refresh() {
    this.refresh$.next();
  }

  public getAllTypeAspirationGestion(): Observable<TypeAspirationDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<TypeAspirationDTO[]>(this.apiGestionUrl + '/types')),
    );
  }

  public getAllAspirationSelection(): Observable<AspirationLegerDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<AspirationLegerDTO[]>(this.apiSelectionUrl)),
    );
  }
}
