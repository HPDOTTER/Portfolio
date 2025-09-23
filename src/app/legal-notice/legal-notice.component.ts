import { Component } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';
import { Router } from '@angular/router';

@Component({
    selector: 'app-legal-notice',
    standalone: true,
    imports: [TranslatePipe],
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
    constructor(private router: Router) {}

    goBack() {
        this.router.navigate(['/']);
    }
}
