import { Component, inject, ViewEncapsulation } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';
import { ButtonWithBorderBottomComponent } from '../button-with-border-bottom/button-with-border-bottom.component';

import { Language } from '../../models/language.type';
import { TranslatedTexts } from '../../models/translation-texts.interface';

@Component({
  selector: 'app-dev-introduction',
  imports: [ButtonWithBorderBottomComponent],
  templateUrl: './dev-introduction.component.html',
  styleUrl: './dev-introduction.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DevIntroductionComponent {
  readonly translationsService = inject(TranslationsService);

  getTexts(lang: Language, type: string): string {
    const texts: TranslatedTexts = {
      pt: {
        introduction: `<span class="nice-to">Muito</span> prazer! Sou <span class="introduction__name">Daniel Mariz</span>.`,
        description:
          'Sou um Desenvolvedor Full-Stack apaixonado por criar aplicativos web acessíveis e que encantam os usuários.',
        button: 'Contato',
      },
      en: {
        introduction: `<span class="nice-to">Nice to</span> meet you! I'm <span class="introduction__name">Daniel Mariz</span>.`,
        description:
          'Based in the Brazil, I’m a Full-Stack developer passionate about building accessible web apps that users love.',
        button: 'Contact me',
      },
      es: {
        introduction: `<span class="nice-to">Mucho</span> gusto! Soy <span class="introduction__name">Daniel Mariz</span>.`,
        description:
          'Soy desarrollador Full-Stack en Brasil, dedicado a construir aplicaciones web accesibles que los usuarios aprecian.',
        button: 'Contáctame',
      },
    };
    return texts[lang][type];
  }
}
