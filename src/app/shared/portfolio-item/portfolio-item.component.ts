import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-portfolio-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio-item.component.html',
    styleUrls: ['./portfolio-item.component.scss'],
})
export class PortfolioItemComponent {
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() image: string = '';
    @Input() technologies: string[] = [];
    @Input() githubLink: string = '';
    @Input() liveLink: string = '';
    @Input() isReversed: boolean = false; // Für die Spiegelung
    @Input() index: number = 0; // Für Styling-Unterschiede
}
