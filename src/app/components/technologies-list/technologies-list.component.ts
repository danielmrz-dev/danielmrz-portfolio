import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
export class TechnologiesListComponent implements OnInit {
  currentLanguage: Language = 'en';
  technologiesList = technologiesList;
  private readonly _translationsService = inject(TranslationsService);

  ngOnInit(): void {
    this._translationsService.currentLanguage$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  getTexts(lang: Language, xpYears: number): string {
    const text: Record<Language, string> = {
      pt: `${xpYears} ${xpYears > 1 ? "anos" : "ano"} de experiência`,
      es: `${xpYears} ${xpYears > 1 ? "años" : "año"} de experiencia`,
      en: `${xpYears} ${xpYears > 1 ? "years" : "year"} experience`,
    };

    return text[lang];
  }
}
