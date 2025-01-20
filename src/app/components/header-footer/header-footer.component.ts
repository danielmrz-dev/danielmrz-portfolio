import { Component } from '@angular/core';
import { ISocialMediaLink } from '../../models/social-media-link.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header, app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-footer.component.html',
  styleUrl: './header-footer.component.scss'
})
export class HeaderFooterComponent {
  socialMediaLinks: ISocialMediaLink[] = [
    {
      socialMedia: 'Visite o meu perfil no Github',
      icon: 'icon-github.svg',
      link: 'https://github.com/danielmrz-dev',
    },
    {
      socialMedia: 'Visite o meu perfil no Frontend Mentor',
      icon: 'icon-frontend-mentor.svg',
      link: 'https://www.frontendmentor.io/profile/danielmrz-dev',
    },
    {
      socialMedia: 'Visite o meu perfil no LinkedIn',
      icon: 'icon-linkedin.svg',
      link: 'https://www.linkedin.com/in/danielmrz-dev/',
    },
    {
      socialMedia: 'Visite o meu perfil no X',
      icon: 'icon-x-twitter.svg',
      link: 'https://x.com/danielmrz_dev',
    },
  ]
}
