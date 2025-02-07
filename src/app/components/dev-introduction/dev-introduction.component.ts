import { Component, inject } from '@angular/core';
import { ButtonWithBorderBottomComponent } from "../button-with-border-bottom/button-with-border-bottom.component";
import { TranslationsService } from '../../services/translations.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dev-introduction',
  standalone: true,
  imports: [ButtonWithBorderBottomComponent, CommonModule],
  templateUrl: './dev-introduction.component.html',
  styleUrl: './dev-introduction.component.scss'
})
export class DevIntroductionComponent {
  
  readonly _translationsService = inject(TranslationsService)
}
