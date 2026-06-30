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

  getEmptyListTexts(lang: Language): string {
    const text: Record<Language, string> = {
      pt: 'Estou preparando novos projetos para mostrar aqui.',
      en: 'I’m working on new projects to share here.',
      es: 'Estoy preparando nuevos proyectos para compartir aquí.',
    };
    return text[lang];
  }

  getLinkText(lang: Language): string {
    const text: Record<Language, string> = {
      pt: 'Link para meus projetos na plataforma Frontend Mentor',
      en: 'Link to my projects on the Frontend Mentor platform',
      es: 'Enlace a mis proyectos en la plataforma Frontend Mentor',
    };
    return `${text[lang]} ↗️`;
  }

  getErrorsText(lang: Language): string {
    const text: Record<Language, string> = {
      pt: 'Erro ao buscar projetos. Tente novamente mais tarde.',
      en: 'Error fetching projects. Please try again later.',
      es: 'Error al buscar proyectos. Inténtalo de nuevo más tarde.',
    };
    return `${text[lang]} ⛔`;
  }
}
