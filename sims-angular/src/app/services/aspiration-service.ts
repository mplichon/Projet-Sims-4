import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { TypeAspirationDTO } from '../models/aspiration/type-aspiration-dto';
import { AspirationLegerDTO } from '../models/aspiration/aspiration-leger-dto';
import { ReponseGestionAspirationDTO } from '../models/aspiration/reponse-gestion-aspiration-dto';
import { RequeteCreationModificationAspirationDTO } from '../models/aspiration/requete-creation-modification-aspiration-dto';
import { ReponseListeGestionAspirationDTO } from '../models/aspiration/reponse-liste-gestion-aspiration-dto';

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

  public getAllTypeAspirationSelection(): Observable<TypeAspirationDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<TypeAspirationDTO[]>(this.apiSelectionUrl + '/types')),
    );
  }

  public getAllAspirationGestion(): Observable<ReponseListeGestionAspirationDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<ReponseListeGestionAspirationDTO[]>(this.apiGestionUrl)),
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
}
