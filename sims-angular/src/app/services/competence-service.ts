import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap, tap } from 'rxjs';
import { ReponseGestionCompetenceDTO } from '../models/competence/reponse-gestion-competence-dto';
import { CompetenceGestionDTO } from '../models/competence/competence-gestion-dto';

@Injectable({
  providedIn: 'root',
})
export class CompetenceService {
  private adminUrl = '/admin';
  private apiUrl = '/competence';
  private apiGestionUrl = this.adminUrl + this.apiUrl + '/gestion';
  private refresh$: Subject<void> = new Subject<void>();

  private readonly http = inject(HttpClient);

  public refresh() {
    this.refresh$.next();
  }

  public getAllCompetenceGestion(): Observable<CompetenceGestionDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<CompetenceGestionDTO[]>(this.apiGestionUrl)),
    );
  }

  public getCompetenceGestionById(id: number): Observable<ReponseGestionCompetenceDTO> {
    return this.http.get<ReponseGestionCompetenceDTO>(`${this.apiGestionUrl}/${id}`);
  }

  public saveCompetenceGestion(
    competenceDTO: CompetenceGestionDTO,
  ): Observable<CompetenceGestionDTO> {
    if (!competenceDTO.id) {
      return this.http
        .post<CompetenceGestionDTO>(this.apiGestionUrl, competenceDTO)
        .pipe(tap(() => this.refresh()));
    } else {
      return this.http
        .put<CompetenceGestionDTO>(`${this.apiGestionUrl}/${competenceDTO.id}`, competenceDTO)
        .pipe(tap(() => this.refresh()));
    }
  }

  public deleteCompetenceById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiGestionUrl}/${id}`).pipe(tap(() => this.refresh()));
  }
}
