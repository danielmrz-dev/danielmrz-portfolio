import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISocialMediaLink } from '../../models/social-media-link.interface';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header, app-footer',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './header-footer.component.html',
  styleUrl: './header-footer.component.scss'
})
export class HeaderFooterComponent implements OnInit {
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
  ];

  @HostBinding('class.is-header') isHeader = false;
  @HostBinding('class.is-footer') isFooter = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const tagName = this.el.nativeElement.tagName.toLowerCase();

    if (tagName === 'app-header') {
      this.isHeader = true;
    } else if (tagName === 'app-footer') {
      this.isFooter = true;
    }
  }
}
