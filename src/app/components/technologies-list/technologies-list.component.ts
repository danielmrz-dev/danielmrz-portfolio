import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';
import { Language } from '../../models/language.type';
import { technologiesList } from '../../consts/technologies-list.const';

@Component({
  selector: 'app-technologies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies-list.component.html',
  styleUrl: './technologies-list.component.scss',
})
export class TechnologiesListComponent {
  currentLanguage: Language = 'en';
  technologiesList = technologiesList;
  private readonly _translationsService = inject(TranslationsService);

  ngOnInit(): void {
    this._translationsService.currentLanguage$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  getTexts(lang: Language): string {
    const text: Record<Language, string> = {
      pt: 'anos de experiência',
      es: 'años de experiencia',
      en: 'years experience',
    };

    return text[lang];
  }
}
