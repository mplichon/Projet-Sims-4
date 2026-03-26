import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { ReponseListeGestionCompetenceDTO } from '../models/competence/reponse-liste-gestion-competence-dto';
import { RequeteCreationModificationCompetenceDTO } from '../models/competence/requete-creation-modification-competence-dto';
import { ReponseGestionCompetenceDTO } from '../models/competence/reponse-gestion-competence-dto';

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

  public getCompetenceGestionById(id: number): Observable<ReponseGestionCompetenceDTO> {
    return this.http.get<ReponseGestionCompetenceDTO>(`${this.apiGestionUrl}/${id}`);
  }

  public saveCompetenceGestion(competenceDTO: RequeteCreationModificationCompetenceDTO): void {
    if (!competenceDTO.id) {
      this.http.post<any>(this.apiGestionUrl, competenceDTO).subscribe(() => this.refresh());
    } else {
      this.http
        .put<any>(`${this.apiGestionUrl}/${competenceDTO.id}`, competenceDTO)
        .subscribe(() => this.refresh());
    }
  }

  public deleteCompetenceById(id: number): void {
    this.http.delete<void>(`${this.apiGestionUrl}/${id}`).subscribe(() => this.refresh());
  }
}
