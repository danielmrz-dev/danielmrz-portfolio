import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IFormData } from '../../models/form-data.interface';
import { CommonModule } from '@angular/common';
import { ButtonWithBorderBottomComponent } from "../button-with-border-bottom/button-with-border-bottom.component";

@Component({
  selector: 'app-modal-email-sent',
  standalone: true,
  imports: [MatDialogContent, CommonModule, MatButton, MatDialogClose, MatProgressSpinnerModule, ButtonWithBorderBottomComponent],
  templateUrl: './modal-email-sent.component.html',
  styleUrl: './modal-email-sent.component.scss',
})
export class ModalEmailSentComponent {
  status: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IFormData) {
    this.status = data['status'] as string;
  }
}
