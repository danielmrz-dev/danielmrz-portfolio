import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ButtonWithBorderBottomComponent } from "../button-with-border-bottom/button-with-border-bottom.component";
import { CommonModule } from '@angular/common';
import { ProjectsList } from '../../models/projects-list.type';
import { TechnologyIconPipe } from '../../pipes/technology-icon.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable, of } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";
import { Language } from '../../models/language.type';
import { TranslationsService } from '../../services/translations.service';
import { TranslatedTexts } from '../../models/translation-texts.interface';



@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ButtonWithBorderBottomComponent, CommonModule, TechnologyIconPipe, MatTooltipModule, LoadingSpinnerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {

  projectsList$: Observable<ProjectsList> = of([]);
  projectHovered: number | null = null;
  currentLanguage: Language = 'en';

  private readonly _projectsService = inject(ProjectsService);
  private readonly _translationsService = inject(TranslationsService);
  

  ngOnInit(): void {
    this.projectsList$ = this._projectsService.getProjects();
    this._translationsService.currentLanguage$.subscribe((lang) => {
      this.currentLanguage = lang;
    })
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
        title: "Projetos",
        contactButton: "Entre em contato",
        seeProjectButton: "Ver Projeto",
        seeCodeButton: "Ver Código",
      },
      en: {
        title: "Projects",
        contactButton: "Contact me",
        seeProjectButton: "View Project",
        seeCodeButton: "View Code",
      },
      es: {
        title: "Proyectos",
        contactButton: "Contáctame",
        seeProjectButton: "Ver Proyecto",
        seeCodeButton: "Ver Código",
      },
    };

    return texts[lang][type];
  }
}
