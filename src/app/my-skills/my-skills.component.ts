import { Component } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
    selector: 'app-my-skills',
    standalone: true,
    imports: [TranslatePipe],
    templateUrl: './my-skills.component.html',
    styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {}
