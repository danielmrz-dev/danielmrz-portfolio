import { Service } from '@angular/core';
import emailjs from '@emailjs/browser';
import { IFormData } from '../models/form-data.interface';

@Service()
export class EmailService {
  private serviceId = 'service_sj64cca';
  private templateId = 'template_kvive7u';
  private publicKey = 'hNSPHmUfWsO46LISD';

  sendEmail(formData: IFormData): Promise<unknown> {
    return emailjs.send(
      this.serviceId,
      this.templateId,
      {
        to_name: 'Daniel',
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      },
      this.publicKey,
    );
  }
}
