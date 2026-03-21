import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { ReponseListeGestionDlcDTO } from '../models/dlc/reponse-liste-gestion-dlc-dto';
import { TypeDlcDTO } from '../models/dlc/type-dlc-dto';

@Injectable({
  providedIn: 'root',
})
export class DlcService {
  private apiUrl = '/dlc';
  private refresh$: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {}

  public refresh() {
    this.refresh$.next();
  }

  public getAllTypeDlcGestion(): Observable<TypeDlcDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<TypeDlcDTO[]>(this.apiUrl + '/gestion/types')),
    );
  }

  public getAllGestion(): Observable<ReponseListeGestionDlcDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<ReponseListeGestionDlcDTO[]>(this.apiUrl + '/gestion')),
    );
  }
}
