import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

/**
 * Root component of the Portfolio application.
 *
 * This is the main application component that serves as the entry point
 * for the entire portfolio website. It provides the basic layout structure
 * with a header, main content area (router outlet), and footer.
 *
 * @component AppComponent
 * @selector app-root
 * @standalone true
 *
 * Features:
 * - Responsive layout structure
 * - Navigation header with mobile menu
 * - Router outlet for dynamic content
 * - Footer with legal links and social media
 *
 * @example
 * ```html
 * <app-root></app-root>
 * ```
 */
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    /** Application title displayed in browser tab */
    title = 'Portfolio';
}
