import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap, tap } from 'rxjs';
import { DlcGestionDTO } from '../../models/dlc/dlc-gestion-dto';
import { DlcLegerDTO } from '../../models/dlc/dlc-leger-dto';
import { ReponseListeGestionDlcDTO } from '../../models/dlc/reponse-liste-gestion-dlc-dto';
import { TypeDlcDTO } from '../../models/dlc/type-dlc-dto';

@Injectable({
  providedIn: 'root',
})
export class DlcService {
  private adminUrl = '/admin';
  private apiUrl = '/dlc';
  private apiGestionUrl = this.adminUrl + this.apiUrl + '/gestion';
  private apiSelectionUrl = this.adminUrl + this.apiUrl + '/selection';
  private refresh$: Subject<void> = new Subject<void>();

  private readonly http = inject(HttpClient);

  public refresh() {
    this.refresh$.next();
  }

  public getAllTypeDlcGestion(): Observable<TypeDlcDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<TypeDlcDTO[]>(this.apiGestionUrl + '/types')),
    );
  }

  public getAllDlcGestion(): Observable<ReponseListeGestionDlcDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<ReponseListeGestionDlcDTO[]>(this.apiGestionUrl)),
    );
  }

  public getAllDlcSelection(): Observable<DlcLegerDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<DlcLegerDTO[]>(this.apiSelectionUrl)),
    );
  }

  public saveDlcGestion(dlcDTO: DlcGestionDTO): Observable<DlcGestionDTO> {
    if (!dlcDTO.id) {
      return this.http
        .post<DlcGestionDTO>(this.apiGestionUrl, dlcDTO)
        .pipe(tap(() => this.refresh()));
    } else {
      return this.http
        .put<DlcGestionDTO>(`${this.apiGestionUrl}/${dlcDTO.id}`, dlcDTO)
        .pipe(tap(() => this.refresh()));
    }
  }

  public deleteDlcById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiGestionUrl}/${id}`).pipe(tap(() => this.refresh()));
  }
}
