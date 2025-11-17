import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItemComponent } from '../shared/portfolio-item/portfolio-item.component';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';

interface Project {
    title: string;
    descriptionKey: string;
    image: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
}

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule, PortfolioItemComponent, TranslatePipe],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
    constructor(private translationService: TranslationService) {}

    projects: Project[] = [
        {
            title: 'Join Task Manager',
            descriptionKey: 'project.join.description',
            image: './assets/img/join-example.png',
            technologies: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
            githubLink: 'https://github.com/HPDOTTER/Join',
            liveLink: 'https://johannes-nordmann.de/Join/',
        },
        {
            title: 'El Pollo Loco Game',
            descriptionKey: 'project.polloLoco.description',
            image: './assets/img/pollo-loco-example.png',
            technologies: ['JavaScript', 'HTML5 Canvas', 'CSS', 'OOP'],
            githubLink: 'https://johannes-nordmann.de/El-Pollo-Loco',
            liveLink:
                'https://johannes-nordmann.de/El-Pollo-Loco/index.html',
        },
    ];

    getProjectDescription(descriptionKey: string): string {
        return this.translationService.translate(descriptionKey);
    }
}
