import { Component } from '@angular/core';

@Component({
    selector: 'app-recommendation',
    standalone: true,
    imports: [],
    templateUrl: './recommendation.component.html',
    styleUrl: './recommendation.component.scss',
})
export class RecommendationComponent {
    currentIndex: number = 0;
    recommendations: { name: string; role: string; text: string; image: string }[] = [
        {
            name: 'Max Mustermann',
            role: 'Projektmanager bei Tech Solutions',
            text: 'Ich hatte das Vergnügen, mit Johannes an mehreren Projekten zu arbeiten. Ihre Fähigkeit, komplexe Probleme zu lösen und innovative Lösungen zu finden, ist beeindruckend. Sie bringt nicht nur technisches Know-how mit, sondern auch eine positive Einstellung, die das gesamte Team motiviert.',
            image: 'assets/images/max-mustermann.jpg',
        },
        {
            name: 'Erika Musterfrau',
            role: 'Senior Developer bei Web Innovations',
            text: 'Johannes ist eine außergewöhnliche Entwicklerin. Ihre Kenntnisse in modernen Webtechnologien und ihr Engagement für sauberen, wartbaren Code sind bemerkenswert. Sie ist immer bereit, ihr Wissen zu teilen und anderen zu helfen, was sie zu einer wertvollen Teamplayerin macht.',
            image: 'assets/images/erika-musterfrau.jpg',
        },
        {
            name: 'John Doe',
            role: 'CTO bei Creative Apps',
            text: 'Die Zusammenarbeit mit Johannes war eine großartige Erfahrung. Ihre Fähigkeit, sich schnell in neue Technologien einzuarbeiten und diese effektiv einzusetzen, hat unser Projekt maßgeblich vorangebracht. Sie ist detailorientiert und stets bestrebt, die bestmöglichen Ergebnisse zu erzielen.',
            image: 'assets/images/john-doe.jpg',
        },
    ];

    previousRecommendation() {
        this.currentIndex = (this.currentIndex - 1 + this.recommendations.length) % this.recommendations.length;
    }

    nextRecommendation() {
        this.currentIndex = (this.currentIndex + 1) % this.recommendations.length;
    }
}
