import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ButtonWithBorderBottomComponent } from "../button-with-border-bottom/button-with-border-bottom.component";
import { TranslationsService } from '../../services/translations.service';
import { CommonModule } from '@angular/common';
import { Language } from '../../models/language.type';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslatedTexts } from '../../models/translation-texts.interface';


@Component({
  selector: 'app-dev-introduction',
  standalone: true,
  imports: [ButtonWithBorderBottomComponent, CommonModule],
  templateUrl: './dev-introduction.component.html',
  styleUrl: './dev-introduction.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DevIntroductionComponent {
  
  private readonly sanitizer = inject(DomSanitizer)
  readonly _translationsService = inject(TranslationsService)
  currentLanguage: Language = 'en';

  ngOnInit(): void {
    this._translationsService.currentLanguage$.subscribe((lang) => {
      this.currentLanguage = lang;
    })
  }

  getTexts(lang: Language, type: string): SafeHtml | string {
    const texts: TranslatedTexts = {
      pt: {
        introduction: `<span class="nice-to">Muito</span> prazer! Sou <span class="introduction__name">Daniel Mariz</span>.`,
        description: "Sou um Desenvolvedor Front-end apaixonado por criar aplicativos web acessíveis e que encantam os usuários.",
        button: "Entre em contato"
      },
      en: {
        introduction: `<span class="nice-to">Nice to</span> meet you! I'm <span class="introduction__name">Daniel Mariz</span>.`,
        description: "Based in the Brazil, I’m a front-end developer passionate about building accessible web apps that users love.",
        button: "Contact me"
      },
      es: {
        introduction: `<span class="nice-to">Mucho</span> gusto! Soy <span class="introduction__name">Daniel Mariz</span>.`,
        description: "Soy desarrollador front-end en Brasil, dedicado a construir aplicaciones web accesibles que los usuarios aprecian.",
        button: "Contáctame"
      }
    }
    return texts[lang][type];
  }
}
