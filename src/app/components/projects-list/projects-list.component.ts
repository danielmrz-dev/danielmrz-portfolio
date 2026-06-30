import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  resource,
} from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Language } from '../../models/language.type';
import { IProjeto } from '../../models/projeto.interface';
import { TranslatedTexts } from '../../models/translation-texts.interface';
import { TechnologyIconPipe } from '../../pipes/technology-icon.pipe';
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
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent {
  projectHovered: number | null = null;

  protected readonly translationsService = inject(TranslationsService);

  projects = resource<IProjeto[], unknown>({
    loader: async () => {
      const fetchedProjects = await fetch('http://localhost:8080/projetos');
      if (!fetchedProjects.ok) {
        throw new Error('Houve um erro ao buscar os projetos.');
      }
      return fetchedProjects.json();
    },
  });

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
