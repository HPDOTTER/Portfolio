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

    toggleMenu() {
        const overlay = document.getElementById('mobile-overlay');
        if (overlay) {
            overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
        }
    }

    
}
