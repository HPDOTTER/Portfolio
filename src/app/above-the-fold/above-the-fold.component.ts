import { Component } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
    selector: 'app-above-the-fold',
    standalone: true,
    imports: [TranslatePipe],
    templateUrl: './above-the-fold.component.html',
    styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {}
