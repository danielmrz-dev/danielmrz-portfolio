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
      xpYears: 2,
    },
    {
      technology: "Sass",
      xpYears: 2,
    },
    {
      technology: "TypeScript",
      xpYears: 2,
    },
    {
      technology: "Accessibility",
      xpYears: 2,
    },
    {
      technology: "Angular",
      xpYears: 2,
    },
    {
      technology: "Node.js",
      xpYears: 2,
    },
  ]
}
