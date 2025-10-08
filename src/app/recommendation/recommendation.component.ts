import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

interface Recommendation {
    nameKey: string;
    roleKey: string;
    textKey: string;
    image: string;
}

@Component({
    selector: 'app-recommendation',
    standalone: true,
    imports: [],
    templateUrl: './recommendation.component.html',
    styleUrl: './recommendation.component.scss',
})
export class RecommendationComponent {
    currentIndex: number = 0;

    constructor(private translationService: TranslationService) {}

    recommendations: Recommendation[] = [
        {
            nameKey: 'recommendation.max.name',
            roleKey: 'recommendation.max.role',
            textKey: 'recommendation.max.text',
            image: '',
        },
        {
            nameKey: 'recommendation.erika.name',
            roleKey: 'recommendation.erika.role',
            textKey: 'recommendation.erika.text',
            image: '',
        },
        {
            nameKey: 'recommendation.john.name',
            roleKey: 'recommendation.john.role',
            textKey: 'recommendation.john.text',
            image: '',
        },
    ];

    // Methods to get translated content
    getRecommendationName(nameKey: string): string {
        return this.translationService.translate(nameKey);
    }

    getRecommendationRole(roleKey: string): string {
        return this.translationService.translate(roleKey);
    }

    getRecommendationText(textKey: string): string {
        return this.translationService.translate(textKey);
    }

    previousRecommendation() {
        this.currentIndex =
            (this.currentIndex - 1 + this.recommendations.length) %
            this.recommendations.length;
    }

    nextRecommendation() {
        this.currentIndex =
            (this.currentIndex + 1) % this.recommendations.length;
    }
}
