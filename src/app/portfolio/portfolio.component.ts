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
            liveLink: 'https://join-394.developerakademie.net/html/login.html',
        },
        {
            title: 'El Pollo Loco Game',
            descriptionKey: 'project.polloLoco.description',
            image: './assets/img/pollo-loco-example.png',
            technologies: ['JavaScript', 'HTML5 Canvas', 'CSS', 'OOP'],
            githubLink: 'https://github.com/HPDOTTER/El-Pollo-Loco',
            liveLink:
                'https://johannes-nordmann.developerakademie.net/El-Pollo-Loco/index.html',
        },
        {
            title: 'Pokédex',
            descriptionKey: 'project.pokedex.description',
            image: './assets/img/pokedex-example.png',
            technologies: [
                'JavaScript',
                'REST API',
                'HTML',
                'CSS',
                'Bootstrap',
            ],
            githubLink: 'https://github.com/HPDOTTER/Pokedex',
            liveLink:
                'https://johannes-nordmann.developerakademie.net/Pokedex/index.html',
        },
        {
            title: 'DA Bubble Chat',
            descriptionKey: 'project.daBubble.description',
            image: './assets/img/join-example.png',
            technologies: [
                'Angular',
                'Firebase',
                'TypeScript',
                'RxJS',
                'Material UI',
            ],
            githubLink: 'https://github.com/username/da-bubble',
            liveLink: 'https://da-bubble.example.com',
        },
        {
            title: 'Portfolio Website',
            descriptionKey: 'project.portfolio.description',
            image: './assets/img/join-example.png',
            technologies: ['Angular', 'SCSS', 'TypeScript'],
            githubLink: 'https://github.com/HPDOTTER/Portfolio',
            liveLink:
                'https://johannes-nordmann.developerakademie.net/angular-projects/Portfolio/dist/portfolio/browser/',
        },
    ];

    getProjectDescription(descriptionKey: string): string {
        return this.translationService.translate(descriptionKey);
    }
}
