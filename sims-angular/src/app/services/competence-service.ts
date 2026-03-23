import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { ReponseListeGestionCompetenceDTO } from '../models/competence/reponse-liste-gestion-competence-dto';

@Injectable({
  providedIn: 'root',
})
export class CompetenceService {
  private apiUrl = '/competence';
  private apiGestionUrl = this.apiUrl + '/gestion';
  private refresh$: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {}

  public refresh() {
    this.refresh$.next();
  }

  public getAllCompetenceGestion(): Observable<ReponseListeGestionCompetenceDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<ReponseListeGestionCompetenceDTO[]>(this.apiGestionUrl)),
    );
  }
}
