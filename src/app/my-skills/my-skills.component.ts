import { Component } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
    selector: 'app-my-skills',
    standalone: true,
    imports: [TranslatePipe],
    templateUrl: './my-skills.component.html',
    styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
    scrollToContact(event: Event) {
        event.preventDefault();
        const contactEl = document.getElementById('contact');
        if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Delay focusing the input to allow the smooth scroll to finish
        setTimeout(() => {
            const nameInput = document.getElementById(
                'name',
            ) as HTMLInputElement | null;
            if (nameInput) {
                nameInput.focus();
            }
        }, 400);
    }
}
