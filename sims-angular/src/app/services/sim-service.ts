import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { CategorieSimDTO } from '../models/categorie-sim-dto';

@Injectable({
  providedIn: 'root',
})
export class SimService {
  private apiUrl = '/sim';
  private apiGestionUrl = this.apiUrl + '/gestion';
  private refresh$: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {}

  public refresh() {
    this.refresh$.next();
  }

  public getAllCategorieSimGestion(): Observable<CategorieSimDTO[]> {
    return this.refresh$.pipe(
      startWith(null),
      switchMap(() => this.http.get<CategorieSimDTO[]>(this.apiGestionUrl + '/categories')),
    );
  }
}
