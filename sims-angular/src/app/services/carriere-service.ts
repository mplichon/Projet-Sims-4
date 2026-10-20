import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap, tap } from 'rxjs';
import { CarriereGestionDTO } from '../models/carriere/carriere-gestion-dto';
import { ReponseGestionCarriereDTO } from '../models/carriere/reponse-gestion-carriere-dto';
import { TypeCarriereDTO } from '../models/carriere/type-carriere-dto';

@Injectable({
  providedIn: 'root',
})
export class CarriereService {
  private adminUrl = '/admin';
  private apiUrl = '/carriere';
  private apiGestionUrl = this.adminUrl + this.apiUrl + '/gestion';
  private apiSelectionUrl = this.adminUrl + this.apiUrl + '/selection';
  private refresh$: Subject<void> = new Subject<void>();

  private readonly http = inject(HttpClient);

  public refresh() {
    this.refresh$.next();
  }

  public getAllTypeCarriereSelection(): Observable<TypeCarriereDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<TypeCarriereDTO[]>(this.apiSelectionUrl + '/types')),
    );
  }

  public getAllCarriereGestion(): Observable<CarriereGestionDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<CarriereGestionDTO[]>(this.apiGestionUrl)),
    );
  }

  public getCarriereGestionById(id: number): Observable<ReponseGestionCarriereDTO> {
    return this.http.get<ReponseGestionCarriereDTO>(`${this.apiGestionUrl}/${id}`);
  }

  public saveCarriereGestion(carriereDTO: CarriereGestionDTO): Observable<CarriereGestionDTO> {
    if (!carriereDTO.id) {
      return this.http
        .post<CarriereGestionDTO>(this.apiGestionUrl, carriereDTO)
        .pipe(tap(() => this.refresh()));
    } else {
      return this.http
        .put<CarriereGestionDTO>(`${this.apiGestionUrl}/${carriereDTO.id}`, carriereDTO)
        .pipe(tap(() => this.refresh()));
    }
  }

  public deleteCarriereById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiGestionUrl}/${id}`).pipe(tap(() => this.refresh()));
  }
}
