import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
    selector: 'app-language-switcher',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './language-switcher.component.html',
    styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
    currentLanguage: string = 'en';

    constructor(private translationService: TranslationService) {
        this.translationService.currentLanguage$.subscribe((lang) => {
            this.currentLanguage = lang;
        });
    }

    switchLanguage(lang: string): void {
        this.translationService.setLanguage(lang);
    }
}
