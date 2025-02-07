import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IFormData } from '../../models/form-data.interface';
import { CommonModule } from '@angular/common';
import { ButtonWithBorderBottomComponent } from "../button-with-border-bottom/button-with-border-bottom.component";
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-modal-email-sent',
  standalone: true,
  imports: [MatDialogContent, CommonModule, MatDialogClose, MatProgressSpinnerModule, ButtonWithBorderBottomComponent],
  templateUrl: './modal-email-sent.component.html',
  styleUrl: './modal-email-sent.component.scss',
})
export class ModalEmailSentComponent {
  status: string;

  readonly _translationsService = inject(TranslationsService);

  constructor(@Inject(MAT_DIALOG_DATA) public data: IFormData) {
    this.status = data['status'] as string;
  }
}
