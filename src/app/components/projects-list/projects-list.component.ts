import { Component } from '@angular/core';
import { ButtonWithBorderBottomComponent } from "../button-with-border-bottom/button-with-border-bottom.component";
import { CommonModule } from '@angular/common';
import { ProjectsList } from '../../models/projects-list.type';
import { TechnologyIconPipe } from '../../pipes/technology-icon.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ButtonWithBorderBottomComponent, CommonModule, TechnologyIconPipe, MatTooltipModule],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {
  projectsList: ProjectsList = [
    {
      images: {
        small: 'frontend-quiz.webp',
        large: 'frontend-quiz.webp',
      },
      name: 'Frontend Quiz',
      technologies: ['Angular', 'TypeScript', 'TailwindCSS', 'RxJS', 'NodeJS'],
      liveSite: 'https://frontend-quiz-one.vercel.app/',
      repository: 'https://github.com/danielmrz-dev/frontend-quiz'
    },
    {
      images: {
        small: 'rest-countries-api.webp',
        large: 'rest-countries-api.webp',
      },
      name: 'Rest Countries API',
      technologies: ['Angular', 'Angular Material', 'TypeScript', 'SASS', 'RxJS'],
      liveSite: 'https://rest-countries-api-lilac-alpha.vercel.app/',
      repository: 'https://github.com/danielmrz-dev/rest-countries-api'
    },
    {
      images: {
        small: 'easybank-landing-page.webp',
        large: 'easybank-landing-page.webp',
      },
      name: 'Easybank Landing Page',
      technologies: ['Angular', 'SASS', 'TypeScript'],
      liveSite: 'https://easybank-blond.vercel.app/',
      repository: 'https://github.com/danielmrz-dev/easybank'
    },
    {
      images: {
        small: 'multi-step-form.webp',
        large: 'multi-step-form.webp',
      },
      name: 'Multi Step Form',
      technologies: ['Angular', 'SASS', 'TypeScript'],
      liveSite: 'https://multistep-form-gules.vercel.app/',
      repository: 'https://github.com/danielmrz-dev/multistep-form'
    },
    {
      images: {
        small: 'github-user-search-app.webp',
        large: 'github-user-search-app.webp',
      },
      name: 'Github User Search App',
      technologies: ['Angular', 'SASS', 'TypeScript', 'RxJS'],
      liveSite: 'https://github-user-search-pearl-six.vercel.app/',
      repository: 'https://github.com/danielmrz-dev/github-user-search'
    },
    {
      images: {
        small: 'conference-ticket-generator.webp',
        large: 'conference-ticket-generator.webp',
      },
      name: 'Conference Ticket Generator',
      technologies: ['Angular', 'SASS', 'TypeScript'],
      liveSite: 'https://conference-ticket-generator-ashen.vercel.app/',
      repository: 'https://github.com/danielmrz-dev/conference-ticket-generator'
    },
  ]
  projectHovered: number | null = null

  onMouseEnter(projectHoveredIndex: number) {
    this.projectHovered = projectHoveredIndex
  }

  onMouseLeave() {
    this.projectHovered = null
  }
}
