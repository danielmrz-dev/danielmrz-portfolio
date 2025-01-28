import { Injectable } from "@angular/core";
import emailjs from "@emailjs/browser";
import { IFormData } from "../models/form-data.interface";

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    private serviceId = 'service_o8dux1a'; 
    private templateId = 'template_kvive7u';
    private publicKey = 'hNSPHmUfWsO46LISD';

    sendEmail(formData: IFormData): Promise<any> {
        return emailjs.send(this.serviceId, this.templateId, { 
            to_name: "Daniel",
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message
        }, this.publicKey)
    }
}