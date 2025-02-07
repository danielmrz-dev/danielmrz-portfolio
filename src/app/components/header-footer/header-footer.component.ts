import { Component, ElementRef, HostBinding, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISocialMediaLink } from '../../models/social-media-link.interface';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { Language } from '../../models/language.type';
import { TranslationsService } from '../../services/translations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header, app-footer',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatMenuModule],
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

  languageSubscription!: Subscription

  @HostBinding('class.is-header') isHeader = false;
  @HostBinding('class.is-footer') isFooter = false;

  private readonly _el = inject(ElementRef);
  private readonly _languagesService = inject(TranslationsService);

  ngOnInit() {
    const tagName = this._el.nativeElement.tagName.toLowerCase();
    if (tagName === 'app-header') {
      this.isHeader = true;
    } else if (tagName === 'app-footer') {
      this.isFooter = true;
    }
    this.languageSubscription = this._languagesService.currentLanguage$.subscribe(() => { });
  }

  changeLanguage(lang: Language) {
    this._languagesService.changeLanguage(lang)
    this.languageSubscription.unsubscribe();
  }
}
