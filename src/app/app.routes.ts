import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

// Create a home component wrapper
import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
    AboveTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactFormComponent
],
    template: `
        <app-above-the-fold></app-above-the-fold>
        <app-about-me></app-about-me>
        <app-my-skills></app-my-skills>
        <app-portfolio></app-portfolio>
        <app-contact-form></app-contact-form>
    `,
})
export class HomeComponent {}

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: '**', redirectTo: '' },
];
