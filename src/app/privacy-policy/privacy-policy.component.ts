import { Component } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';
import { Router } from '@angular/router';

@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    imports: [TranslatePipe],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
    constructor(private router: Router) {}

    goBack() {
        this.router.navigate(['/']);
    }
}
