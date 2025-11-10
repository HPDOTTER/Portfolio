import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';

@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [FormsModule, CommonModule, TranslatePipe, RouterLink],
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
    http = inject(HttpClient);

    contactData = {
        name: '',
        email: '',
        message: '',
        privacy: false,
    };

    showPopup = false;
    popupType: 'success' | 'error' = 'success';

    post = {
        endPoint: '/sendMail.php',
        body: (payload: any) => JSON.stringify(payload),
        options: {
            headers: {
                'Content-Type': 'text/plain',
                responseType: 'text',
            },
        },
    };

    constructor(private translationService: TranslationService) {}

    onSubmit(ngForm: NgForm) {
        if (ngForm.submitted && ngForm.form.valid) {
            this.http
                .post(this.post.endPoint, this.post.body(this.contactData))
                .subscribe({
                    next: (response) => {
                        ngForm.resetForm();
                        this.showSuccessPopup();
                    },
                    error: (error) => {
                        this.showErrorPopup();
                    },
                });
        }
    }

    showSuccessPopup() {
        this.popupType = 'success';
        this.showPopup = true;
    }

    showErrorPopup() {
        this.popupType = 'error';
        this.showPopup = true;
    }

    closePopup() {
        this.showPopup = false;
    }
}
