import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable, of } from 'rxjs';
import { Language } from '../../models/language.type';
import { ProjectsList } from '../../models/projects-list.type';
import { TranslatedTexts } from '../../models/translation-texts.interface';
import { TechnologyIconPipe } from '../../pipes/technology-icon.pipe';
import { ProjectsService } from '../../services/projects.service';
import { TranslationsService } from '../../services/translations.service';
import { ButtonWithBorderBottomComponent } from '../button-with-border-bottom/button-with-border-bottom.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-projects-list',
  imports: [
    ButtonWithBorderBottomComponent,
    CommonModule,
    TechnologyIconPipe,
    MatTooltipModule,
    LoadingSpinnerComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent implements OnInit {
  projectsList$: Observable<ProjectsList> = of([]);
  projectHovered: number | null = null;
  currentLanguage: Language = 'en';

  private readonly _projectsService = inject(ProjectsService);
  private readonly _translationsService = inject(TranslationsService);

  ngOnInit(): void {
    this.projectsList$ = this._projectsService.getProjects();
    this._translationsService.currentLanguage$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  onMouseEnter(projectHoveredIndex: number) {
    this.projectHovered = projectHoveredIndex;
  }

  onMouseLeave() {
    this.projectHovered = null;
  }

  getTexts(lang: Language, type: string): string {
    const texts: TranslatedTexts = {
      pt: {
        title: 'Projetos',
        contactButton: 'Contato',
        seeProjectButton: 'Ver Projeto',
        seeCodeButton: 'Ver Código',
      },
      en: {
        title: 'Projects',
        contactButton: 'Contact me',
        seeProjectButton: 'View Project',
        seeCodeButton: 'View Code',
      },
      es: {
        title: 'Proyectos',
        contactButton: 'Contáctame',
        seeProjectButton: 'Ver Proyecto',
        seeCodeButton: 'Ver Código',
      },
    };

    return texts[lang][type];
  }
}
