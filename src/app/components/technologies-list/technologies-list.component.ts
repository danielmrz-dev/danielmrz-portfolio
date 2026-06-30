import { Component, inject } from '@angular/core';
import { technologiesList } from '../../consts/technologies-list.const';
import { Language } from '../../models/language.type';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-technologies-list',
  templateUrl: './technologies-list.component.html',
  styleUrl: './technologies-list.component.scss',
})
export class TechnologiesListComponent {
  technologiesList = technologiesList;
  protected readonly translationsService = inject(TranslationsService);

  getTexts(lang: Language, xpYears: number): string {
    const text: Record<Language, string> = {
      pt: `${xpYears} ${xpYears > 1 ? 'anos' : 'ano'} de experiência`,
      es: `${xpYears} ${xpYears > 1 ? 'años' : 'año'} de experiencia`,
      en: `${xpYears} ${xpYears > 1 ? 'years' : 'year'} experience`,
    };

    return text[lang];
  }
}
