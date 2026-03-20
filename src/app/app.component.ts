import {
    Component,
    AfterViewInit,
    HostListener,
    Inject,
    PLATFORM_ID,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

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

    constructor(
        @Inject(PLATFORM_ID) private platformId: object,
        private router: Router,
    ) {}

    /** After view init set CSS variables for header/footer heights (browser only) */
    ngAfterViewInit(): void {
        if (typeof window === 'undefined' || typeof document === 'undefined')
            return;

        if (isPlatformBrowser(this.platformId)) {
            AOS.init({
                duration: 750,
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                once: true,
                mirror: false,
                offset: 100,
                anchorPlacement: 'top-bottom',
                disable: () =>
                    window.matchMedia('(prefers-reduced-motion: reduce)')
                        .matches,
            });

            this.router.events
                .pipe(filter((event) => event instanceof NavigationEnd))
                .subscribe(() => {
                    // Refresh after route content is rendered.
                    setTimeout(() => AOS.refreshHard(), 0);
                });
        }

        // initial measurement after browser paints
        requestAnimationFrame(() => this.updateHeaderFooterHeightVars());
    }

    @HostListener('window:resize')
    onResize(): void {
        if (typeof window === 'undefined' || typeof document === 'undefined')
            return;
        this.updateHeaderFooterHeightVars();

        if (isPlatformBrowser(this.platformId)) {
            AOS.refresh();
        }
    }

    private updateHeaderFooterHeightVars(): void {
        try {
            const header = document.querySelector('app-header');
            const footer = document.querySelector('app-footer');
            const root = document.documentElement;

            const headerHeight = header
                ? Math.ceil((header as HTMLElement).offsetHeight)
                : 0;
            const footerHeight = footer
                ? Math.ceil((footer as HTMLElement).offsetHeight)
                : 0;

            if (root && typeof root.style !== 'undefined') {
                root.style.setProperty('--header-height', `${headerHeight}px`);
                root.style.setProperty('--footer-height', `${footerHeight}px`);
            }
        } catch (e) {
            // swallow in case of unexpected DOM issues
            // keep silent to avoid logging during SSR or tests
        }
    }
}
