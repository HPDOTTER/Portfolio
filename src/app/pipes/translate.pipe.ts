import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

/**
 * Angular pipe for translating text keys in templates.
 *
 * This pipe provides a convenient way to translate text in Angular templates
 * by using translation keys. It automatically updates when the language changes
 * due to the `pure: false` configuration.
 *
 * @pipe TranslatePipe
 * @name translate
 * @standalone true
 * @pure false - Ensures pipe re-evaluates when language changes
 *
 * @example
 * ```html
 * <!-- Basic usage -->
 * <h1>{{ 'nav.about' | translate }}</h1>
 *
 * <!-- In attributes -->
 * <input [placeholder]="'contact.name' | translate">
 *
 * <!-- Dynamic keys -->
 * <p>{{ dynamicKey | translate }}</p>
 * ```
 *
 * @example
 * ```typescript
 * // Component usage (though pipe is preferred in templates)
 * constructor(private translatePipe: TranslatePipe) {}
 *
 * getTranslation(key: string): string {
 *   return this.translatePipe.transform(key);
 * }
 * ```
 */
@Pipe({
    name: 'translate',
    standalone: true,
    pure: false, // Important: makes pipe react to language changes
})
export class TranslatePipe implements PipeTransform {
    /**
     * Initializes the pipe with the translation service.
     *
     * @param {TranslationService} translationService - Service for managing translations
     */
    constructor(private translationService: TranslationService) {}

    /**
     * Transforms a translation key into translated text.
     *
     * @param {string} key - Translation key to transform (e.g., 'nav.about')
     * @returns {string} Translated text in current language
     *
     * @example
     * ```typescript
     * transform('nav.about') // Returns: "About me" or "Über mich"
     * ```
     */
    transform(key: string): string {
        return this.translationService.translate(key);
    }
}
