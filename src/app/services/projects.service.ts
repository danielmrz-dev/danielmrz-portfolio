import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IProjeto } from '../models/projeto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  readonly api: string = "http://localhost:8080/projetos"
  private readonly _http = inject(HttpClient);

  getProjects(): Observable<IProjeto[]> {
    return this._http.get<IProjeto[]>(this.api).pipe(
      catchError((err) => {
        console.log(err);
        return of([])
      })
    );
  }
}
