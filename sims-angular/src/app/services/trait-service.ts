import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap, tap } from 'rxjs';
import { ReponseModificationTraitDTO } from '../models/trait/reponse-modification-trait-dto';
import { TraitGestionDTO } from '../models/trait/trait-gestion-dto';
import { TraitLegerDTO } from '../models/trait/trait-leger-dto';
import { TypeTraitDTO } from '../models/trait/type-trait-dto';

@Injectable({
  providedIn: 'root',
})
export class TraitService {
  private adminUrl = '/admin';
  private apiUrl = '/trait';
  private apiGestionUrl = this.adminUrl + this.apiUrl + '/gestion';
  private apiSelectionUrl = this.adminUrl + this.apiUrl + '/selection';
  private refresh$: Subject<void> = new Subject<void>();

  private readonly http = inject(HttpClient);

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
