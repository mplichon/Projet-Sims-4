import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { TypeCarriereDTO } from '../models/carriere/type-carriere-dto';
import { ReponseListeGestionCarriereDTO } from '../models/carriere/reponse-liste-gestion-carriere-dto';
import { ReponseGestionCarriereDTO } from '../models/carriere/reponse-gestion-carriere-dto';
import { RequeteCreationModificationCarriereDTO } from '../models/carriere/requete-creation-modification-carriere-dto';

@Injectable({
  providedIn: 'root',
})
export class CarriereService {
  private apiUrl = '/carriere';
  private apiGestionUrl = this.apiUrl + '/gestion';
  private apiSelectionUrl = this.apiUrl + '/selection';
  private refresh$: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {}

  public refresh() {
    this.refresh$.next();
  }

  public getAllTypeCarriereSelection(): Observable<TypeCarriereDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<TypeCarriereDTO[]>(this.apiSelectionUrl + '/types')),
    );
  }

  public getAllCarriereGestion(): Observable<ReponseListeGestionCarriereDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<ReponseListeGestionCarriereDTO[]>(this.apiGestionUrl)),
    );
  }

  public getCarriereGestionById(id: number): Observable<ReponseGestionCarriereDTO> {
    return this.http.get<ReponseGestionCarriereDTO>(`${this.apiGestionUrl}/${id}`);
  }

  public saveCarriereGestion(carriereDTO: RequeteCreationModificationCarriereDTO): void {
    if (!carriereDTO.id) {
      this.http.post<any>(this.apiGestionUrl, carriereDTO).subscribe(() => this.refresh());
    } else {
      this.http
        .put<any>(`${this.apiGestionUrl}/${carriereDTO.id}`, carriereDTO)
        .subscribe(() => this.refresh());
    }
  }

  public deleteCarriereById(id: number): void {
    this.http.delete<void>(`${this.apiGestionUrl}/${id}`).subscribe(() => this.refresh());
  }
}
