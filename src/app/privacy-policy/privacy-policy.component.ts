import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';
import { Router } from '@angular/router';

@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    imports: [TranslatePipe],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {
        // Scroll to top when component initializes
        window.scrollTo(0, 0);
    }

    goBack() {
        this.router.navigate(['/']);
    }
}
