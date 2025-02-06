import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProjectsList } from '../models/projects-list.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly _http = inject(HttpClient)

  getProjects(): Observable<ProjectsList> {
    return this._http.get<ProjectsList>('https://projects-6nc6.onrender.com/projetos');
  }
}
