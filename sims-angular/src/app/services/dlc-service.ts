import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { ReponseListeGestionDlcDTO } from '../models/dlc/reponse-liste-gestion-dlc-dto';
import { TypeDlcDTO } from '../models/dlc/type-dlc-dto';
import { RequeteCreationModificationDlcDTO } from '../models/dlc/requete-creation-modification-dlc-dto';
import { DlcLegerDTO } from '../models/dlc/dlc-leger-dto';

@Injectable({
  providedIn: 'root',
})
export class DlcService {
  private apiUrl = '/dlc';
  private apiGestionUrl = this.apiUrl + '/gestion';
  private apiSelectionUrl = this.apiUrl + '/selection';
  private refresh$: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {}

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

  public saveDlcGestion(dlcDTO: RequeteCreationModificationDlcDTO): void {
    if (!dlcDTO.id) {
      this.http.post<any>(this.apiGestionUrl, dlcDTO).subscribe(() => this.refresh());
    } else {
      this.http
        .put<any>(`${this.apiGestionUrl}/${dlcDTO.id}`, dlcDTO)
        .subscribe(() => this.refresh());
    }
  }

  public deleteDlcById(id: number): void {
    this.http.delete<void>(`${this.apiGestionUrl}/${id}`).subscribe(() => this.refresh());
  }
}
