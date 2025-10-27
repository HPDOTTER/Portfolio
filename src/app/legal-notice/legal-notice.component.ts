import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';
import { Router } from '@angular/router';

@Component({
    selector: 'app-legal-notice',
    standalone: true,
    imports: [TranslatePipe],
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {
        // Scroll to top when component initializes
        window.scrollTo(0, 0);
    }

    goBack() {
        this.router.navigate(['/']);
    }
}
