import { Pipe, PipeTransform } from '@angular/core';
import { TechnologiesNames } from '../enums/technologies-names.enum';

@Pipe({
  name: 'technologyIcon',
  standalone: true
})
export class TechnologyIconPipe implements PipeTransform {

  transform(technology: string): string {
    
    const icons: { [key in TechnologiesNames]: string } = {
      [TechnologiesNames.ANGULAR]: 'angular.svg',
      [TechnologiesNames.ANGULARMATERIAL]: 'angularmaterial-original.svg',
      [TechnologiesNames.TAILWIND]: 'tailwindcss-original.svg',
      [TechnologiesNames.TYPESCRIPT]: 'typescript-original.svg',
      [TechnologiesNames.JAVASCRIPT]: 'javascript-original.svg',
      [TechnologiesNames.RXJS]: 'rxjs-original.svg',
      [TechnologiesNames.SASS]: 'sass-original.svg',
      [TechnologiesNames.NODEJS]: 'nodejs-original.svg',
      [TechnologiesNames.EXPRESS]: 'express-original.svg',
    }
    
    return icons[technology as TechnologiesNames];
  }

}
