import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

/**
 * Header component providing navigation and mobile menu functionality.
 *
 * This component serves as the main navigation header for the portfolio website.
 * It includes responsive design with a mobile hamburger menu, language switcher,
 * and smooth scroll navigation to different sections of the page.
 *
 * @component HeaderComponent
 * @selector app-header
 * @standalone true
 *
 * Features:
 * - Sticky header that stays at top during scroll
 * - Responsive navigation (desktop links, mobile hamburger menu)
 * - Mobile overlay menu with backdrop
 * - Language switcher integration
 * - Smooth scroll navigation to page sections
 * - Body scroll locking when mobile menu is open
 *
 * @example
 * ```html
 * <app-header></app-header>
 * ```
 */
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [TranslatePipe, LanguageSwitcherComponent, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    /** Tracks mobile menu open/closed state */
    isMenuOpen = false;

    /**
     * Toggles the mobile navigation menu.
     *
     * Controls the visibility of the mobile overlay menu and manages
     * body scroll locking to prevent background scrolling when menu is open.
     * Updates both the overlay visibility and scroll behavior.
     *
     * @method toggleMenu
     *
     * Side Effects:
     * - Toggles 'active' class on mobile overlay
     * - Locks/unlocks body and html scrolling
     * - Updates isMenuOpen state
     *
     * @example
     * ```html
     * <button (click)="toggleMenu()">☰</button>
     * ```
     */
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

    /**
     * Closes the mobile navigation menu.
     *
     * Explicitly closes the mobile menu and restores normal scrolling.
     * Used by navigation links and overlay background clicks to dismiss
     * the mobile menu after user interaction.
     *
     * @method closeMenu
     *
     * Side Effects:
     * - Removes 'active' class from mobile overlay
     * - Restores normal body and html scrolling
     * - Updates isMenuOpen state to false
     *
     * @example
     * ```html
     * <a (click)="closeMenu()" href="#about">About</a>
     * ```
     */
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
