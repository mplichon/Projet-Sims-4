import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { TypeTraitDTO } from '../models/trait/type-trait-dto';
import { ReponseListeGestionTraitDTO } from '../models/trait/reponse-liste-gestion-trait-dto';
import { RequeteCreationModificationTraitDTO } from '../models/trait/requete-creation-modification-trait-dto';
import { ReponseModificationTraitDTO } from '../models/trait/reponse-modification-trait-dto';

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

  public getAllTraitGestion(): Observable<ReponseListeGestionTraitDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<ReponseListeGestionTraitDTO[]>(this.apiGestionUrl)),
    );
  }

  public getTraitGestionById(id: number): Observable<ReponseModificationTraitDTO> {
    return this.http.get<ReponseModificationTraitDTO>(`${this.apiGestionUrl}/${id}`);
  }

  public saveTraitGestion(traitDTO: RequeteCreationModificationTraitDTO): void {
    if (!traitDTO.id) {
      this.http.post<any>(this.apiGestionUrl, traitDTO).subscribe(() => this.refresh());
    } else {
      this.http
        .put<any>(`${this.apiGestionUrl}/${traitDTO.id}`, traitDTO)
        .subscribe(() => this.refresh());
    }
  }

  public deleteTraitById(id: number): void {
    this.http.delete<void>(`${this.apiGestionUrl}/${id}`).subscribe(() => this.refresh());
  }
}
