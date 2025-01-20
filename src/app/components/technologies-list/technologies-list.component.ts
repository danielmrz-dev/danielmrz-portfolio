import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TechnologiesList } from '../../models/technologies-list.type';

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
      technology: "HTML",
      xpYears: 4,
    },
    {
      technology: "CSS",
      xpYears: 4,
    },
    {
      technology: "Javascript",
      xpYears: 4,
    },
    {
      technology: "Accessibility",
      xpYears: 4,
    },
    {
      technology: "React",
      xpYears: 3,
    },
    {
      technology: "Sass",
      xpYears: 3,
    },
  ]
}
