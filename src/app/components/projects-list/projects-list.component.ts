import { Component, inject } from '@angular/core';
import { ButtonWithBorderBottomComponent } from "../button-with-border-bottom/button-with-border-bottom.component";
import { CommonModule } from '@angular/common';
import { ProjectsList } from '../../models/projects-list.type';
import { TechnologyIconPipe } from '../../pipes/technology-icon.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable, of } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';


@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ButtonWithBorderBottomComponent, CommonModule, TechnologyIconPipe, MatTooltipModule],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {

  projectsList$: Observable<ProjectsList> = of([]);
  projectHovered: number | null = null;

  private readonly _projectsService = inject(ProjectsService);

  ngOnInit(): void {
    this.projectsList$ = this._projectsService.getProjects();
  }

  onMouseEnter(projectHoveredIndex: number) {
    this.projectHovered = projectHoveredIndex;
  }

  onMouseLeave() {
    this.projectHovered = null;
  }
}
