import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [TranslatePipe, LanguageSwitcherComponent, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    isMenuOpen = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        const overlay = document.getElementById('mobile-overlay');
        const body = document.body;
        const html = document.documentElement;

        if (overlay) {
            if (this.isMenuOpen) {
                overlay.classList.add('active');
                body.style.overflow = 'hidden';
                html.style.overflow = 'hidden';
            } else {
                overlay.classList.remove('active');
                body.style.overflow = '';
                html.style.overflow = '';
            }
        }
    }

    closeMenu() {
        const overlay = document.getElementById('mobile-overlay');
        const body = document.body;
        const html = document.documentElement;

        if (overlay && overlay.classList.contains('active')) {
            overlay.classList.remove('active');
            body.style.overflow = '';
            html.style.overflow = '';
        }
    }
}
