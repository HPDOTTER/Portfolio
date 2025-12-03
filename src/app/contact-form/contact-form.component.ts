import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';

/**
 * Contact form component for user inquiries and communication.
 *
 * Provides a fully validated contact form with popup feedback notifications.
 * Integrates with backend email service and translation system for multilingual support.
 *
 * @component ContactFormComponent
 * @selector app-contact-form
 * @standalone true
 *
 * Features:
 * - Template-driven form validation with real-time feedback
 * - Multilingual popup notifications (success/error)
 * - Backend email service integration
 * - Privacy policy consent requirement
 * - Form reset after successful submission
 * - Responsive design with mobile optimization
 *
 * Translation Keys Used:
 * - contact.success.title - Success popup title
 * - contact.success.message - Success popup message
 * - contact.success.close - Close button text
 * - contact.error.sendMessage - Error popup message
 * - contact.error.name - Name validation error
 * - contact.error.email - Email validation error
 * - contact.error.emailPattern - Email format error
 * - contact.error.message - Message validation error
 *
 * Form Validation Rules:
 * - Name: Required field
 * - Email: Required, must match email pattern
 * - Message: Required, minimum 3 characters
 * - Privacy: Required checkbox acceptance
 *
 * @example
 * ```html
 * <app-contact-form></app-contact-form>
 * ```
 */
@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [FormsModule, CommonModule, TranslatePipe, RouterLink],
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
    /** HTTP client service for form submission */
    http = inject(HttpClient);

    /**
     * Form data model containing all contact form fields.
     *
     * @property {string} name - User's full name (required)
     * @property {string} email - User's email address (required, validated)
     * @property {string} message - User's message content (required, min 3 chars)
     * @property {boolean} privacy - Privacy policy acceptance (required)
     */
    contactData = {
        name: '',
        email: '',
        message: '',
        privacy: false,
    };

    /** Controls visibility of the notification popup */
    showPopup = false;

    /** Determines popup type and styling ('success' or 'error') */
    popupType: 'success' | 'error' = 'success';

    /** Email validation regex pattern */
    private emailPattern =
        /^[a-zA-Z0-9][a-zA-Z0-9._%-]*[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9.-]*[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;

    /**
     * HTTP POST configuration for form submission.
     *
     * @property {string} endPoint - Backend API endpoint for email processing
     * @property {Function} body - Serializes form data to JSON string
     * @property {Object} options - HTTP request headers configuration
     */
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

    /**
     * Initializes contact form component with translation service.
     *
     * @param translationService - Service for multilingual popup messages
     */
    constructor(private translationService: TranslationService) {}

    /**
     * Validates email format using regex pattern.
     *
     * @param email - Email string to validate
     * @returns true if email is valid, false otherwise
     */
    isValidEmail(email: string): boolean {
        return this.emailPattern.test(email);
    }

    /**
     * Custom email validator directive for template-driven forms.
     *
     * @param emailModel - NgModel reference from template
     * @returns validation errors object or null if valid
     */
    validateEmail(emailModel: NgModel): { [key: string]: any } | null {
        const email = emailModel.value;
        if (!email) {
            return null; // Let required validator handle empty values
        }
        if (!this.isValidEmail(email)) {
            return { pattern: true };
        }
        return null;
    }

    /**
     * Handles form submission and sends data to backend email service.
     *
     * Validates form data and sends HTTP POST request to backend.
     * Shows success popup on successful submission with form reset.
     * Shows error popup if submission fails.
     *
     * @param ngForm - Angular form reference with validation state
     *
     * Validation Requirements:
     * - Form must be submitted (not just dirty)
     * - All required fields must be valid
     * - Email must match valid email pattern
     * - Message must be minimum 3 characters
     * - Privacy policy must be accepted
     *
     * @example
     * ```html
     * <form (ngSubmit)="onSubmit(contactForm)" #contactForm="ngForm">
     *   <!-- form fields -->
     * </form>
     * ```
     */
    onSubmit(ngForm: NgForm) {
        // Additional email validation check
        if (!this.isValidEmail(this.contactData.email)) {
            return;
        }

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

    /**
     * Displays success notification popup.
     *
     * Sets popup type to 'success' and makes it visible.
     * Used after successful form submission and email sending.
     * Popup content is automatically translated based on current language.
     */
    showSuccessPopup() {
        this.popupType = 'success';
        this.showPopup = true;
    }

    /**
     * Displays error notification popup.
     *
     * Sets popup type to 'error' and makes it visible.
     * Used when form submission fails or server error occurs.
     * Popup content is automatically translated based on current language.
     */
    showErrorPopup() {
        this.popupType = 'error';
        this.showPopup = true;
    }

    /**
     * Closes the notification popup.
     *
     * Hides the popup by setting showPopup to false.
     * Can be triggered by clicking the close button or popup overlay.
     *
     * @example
     * ```html
     * <button (click)="closePopup()">×</button>
     * <div class="popup-overlay" (click)="closePopup()"></div>
     * ```
     */
    closePopup() {
        this.showPopup = false;
    }
}
