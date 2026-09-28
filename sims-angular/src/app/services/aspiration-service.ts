import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap, tap } from 'rxjs';
import { TypeAspirationDTO } from '../models/aspiration/type-aspiration-dto';
import { AspirationLegerDTO } from '../models/aspiration/aspiration-leger-dto';
import { ReponseGestionAspirationDTO } from '../models/aspiration/reponse-gestion-aspiration-dto';
import { RequeteCreationModificationAspirationDTO } from '../models/aspiration/requete-creation-modification-aspiration-dto';
import { AspirationGestionDTO } from '../models/aspiration/aspiration-gestion-dto';

@Injectable({
  providedIn: 'root',
})
export class AspirationService {
  private apiUrl = '/aspiration';
  private apiGestionUrl = this.apiUrl + '/gestion';
  private apiSelectionUrl = this.apiUrl + '/selection';
  private refresh$: Subject<void> = new Subject<void>();

  private readonly http = inject(HttpClient);

  public refresh() {
    this.refresh$.next();
  }

  public getAllTypeAspirationSelection(): Observable<TypeAspirationDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<TypeAspirationDTO[]>(this.apiSelectionUrl + '/types')),
    );
  }

  public getAllAspirationGestion(): Observable<AspirationGestionDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<AspirationGestionDTO[]>(this.apiGestionUrl)),
    );
  }

  public getAllAspirationSelection(): Observable<AspirationLegerDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<AspirationLegerDTO[]>(this.apiSelectionUrl)),
    );
  }

  public getAspirationGestionById(id: number): Observable<ReponseGestionAspirationDTO> {
    return this.http.get<ReponseGestionAspirationDTO>(`${this.apiGestionUrl}/${id}`);
  }

  public saveAspirationGestion(aspirationDTO: RequeteCreationModificationAspirationDTO): void {
    if (!aspirationDTO.id) {
      this.http.post<any>(this.apiGestionUrl, aspirationDTO).subscribe(() => this.refresh());
    } else {
      this.http
        .put<any>(`${this.apiGestionUrl}/${aspirationDTO.id}`, aspirationDTO)
        .subscribe(() => this.refresh());
    }
  }

  public deleteAspirationById(id: number): void {
    this.http.delete<void>(`${this.apiGestionUrl}/${id}`).subscribe(() => this.refresh());
  }

  public saveAspirationGestionV2(
    aspirationDTO: AspirationGestionDTO,
  ): Observable<AspirationGestionDTO> {
    if (!aspirationDTO.id) {
      return this.http
        .post<AspirationGestionDTO>(this.apiGestionUrl, aspirationDTO)
        .pipe(tap(() => this.refresh()));
    } else {
      return this.http
        .put<AspirationGestionDTO>(`${this.apiGestionUrl}/${aspirationDTO.id}`, aspirationDTO)
        .pipe(tap(() => this.refresh()));
    }
  }

  public deleteAspirationByIdV2(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiGestionUrl}/${id}`).pipe(tap(() => this.refresh()));
  }
}
