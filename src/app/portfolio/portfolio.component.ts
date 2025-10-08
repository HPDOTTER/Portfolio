import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItemComponent } from '../shared/portfolio-item/portfolio-item.component';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';

interface Project {
    title: string;
    descriptionKey: string; // Changed to store translation key instead of direct text
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
            image: '../../assets/img/join-example.png',
            technologies: ['Angular', 'TypeScript', 'Firebase', 'HTML', 'SCSS'],
            githubLink: 'https://github.com/username/join',
            liveLink: 'https://join-app.example.com',
        },
        {
            title: 'El Pollo Loco Game',
            descriptionKey: 'project.polloLoco.description',
            image: '../../assets/img/pollo-loco-example.png',
            technologies: ['JavaScript', 'HTML5 Canvas', 'CSS', 'OOP'],
            githubLink: 'https://github.com/username/el-pollo-loco',
            liveLink: 'https://el-pollo-loco.example.com',
        },
        {
            title: 'Pokédex',
            descriptionKey: 'project.pokedex.description',
            image: '../../assets/img/join-example.png',
            technologies: [
                'JavaScript',
                'REST API',
                'HTML',
                'CSS',
                'Bootstrap',
            ],
            githubLink: 'https://github.com/username/pokedex',
            liveLink: 'https://pokedex.example.com',
        },
        {
            title: 'DA Bubble Chat',
            descriptionKey: 'project.daBubble.description',
            image: '../../assets/img/join-example.png',
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
            image: '../../assets/img/join-example.png',
            technologies: ['Angular', 'SCSS', 'TypeScript'],
            githubLink: 'https://github.com/username/portfolio',
            liveLink: 'https://portfolio.example.com',
        },
    ];

    // Method to get translated description
    getProjectDescription(descriptionKey: string): string {
        return this.translationService.translate(descriptionKey);
    }
}
