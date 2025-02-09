import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TechnologiesList } from '../../models/technologies-list.type';
import { TranslationsService } from '../../services/translations.service';
import { Language } from '../../models/language.type';

@Component({
  selector: 'app-technologies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies-list.component.html',
  styleUrl: './technologies-list.component.scss'
})
export class TechnologiesListComponent {
  technologiesList: TechnologiesList = [
    {
      technology: "Angular",
      xpYears: 2,
    },
    {
      technology: "Typescript",
      xpYears: 2,
    },
    {
      technology: "Sass",
      xpYears: 2,
    },
    {
      technology: "Tailwind",
      xpYears: 2,
    },
    {
      technology: "Accessibility",
      xpYears: 2,
    },
    {
      technology: "Node.js",
      xpYears: 2,
    },
  ]

  currentLanguage: Language = 'en';
  private readonly _translationsService = inject(TranslationsService);

  ngOnInit(): void {
    this._translationsService.currentLanguage$.subscribe((lang) => {
      this.currentLanguage = lang;
    })
  }

  getTexts(lang: Language): string {
    const text: { [key in Language]: string } = {
      'pt': 'anos de experiência',
      'es': 'años de experiencia',
      'en': 'years experience',
    }

    return text[lang]
  }
}
