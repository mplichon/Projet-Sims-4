import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap, tap } from 'rxjs';
import { TypeTraitDTO } from '../models/trait/type-trait-dto';
import { ReponseListeGestionTraitDTO } from '../models/trait/reponse-liste-gestion-trait-dto';
import { RequeteCreationModificationTraitDTO } from '../models/trait/requete-creation-modification-trait-dto';
import { ReponseModificationTraitDTO } from '../models/trait/reponse-modification-trait-dto';
import { TraitLegerDTO } from '../models/trait/trait-leger-dto';
import { TraitGestionDTO } from '../models/trait/trait-gestion-dto';

@Injectable({
  providedIn: 'root',
})
export class TraitService {
  private apiUrl = '/trait';
  private apiGestionUrl = this.apiUrl + '/gestion';
  private apiSelectionUrl = this.apiUrl + '/selection';
  private refresh$: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {}

  public refresh() {
    this.refresh$.next();
  }

  public getAllTypeTraitGestion(): Observable<TypeTraitDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<TypeTraitDTO[]>(this.apiGestionUrl + '/types')),
    );
  }

  public getAllTraitGestion(): Observable<TraitGestionDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<TraitGestionDTO[]>(this.apiGestionUrl)),
    );
  }

  public getAllTraitAspirationSelection(): Observable<TraitLegerDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<TraitLegerDTO[]>(this.apiSelectionUrl + '/aspiration')),
    );
  }

  public getTraitGestionById(id: number): Observable<ReponseModificationTraitDTO> {
    return this.http.get<ReponseModificationTraitDTO>(`${this.apiGestionUrl}/${id}`);
  }

  public saveTraitGestion(traitDTO: TraitGestionDTO): Observable<TraitGestionDTO> {
    if (!traitDTO.id) {
      return this.http
        .post<TraitGestionDTO>(this.apiGestionUrl, traitDTO)
        .pipe(tap(() => this.refresh()));
    } else {
      return this.http
        .put<TraitGestionDTO>(`${this.apiGestionUrl}/${traitDTO.id}`, traitDTO)
        .pipe(tap(() => this.refresh()));
    }
  }

  public deleteTraitById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiGestionUrl}/${id}`).pipe(tap(() => this.refresh()));
  }
}
