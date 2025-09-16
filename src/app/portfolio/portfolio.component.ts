import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItemComponent } from '../shared/portfolio-item/portfolio-item.component';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioItemComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Join Task Manager',
      description: 'Eine Task-Management-App, die Teams dabei hilft, Projekte zu organisieren und zu verfolgen. Mit Drag & Drop, Benutzerrollen und Real-Time Updates.',
      image: '',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'HTML', 'SCSS'],
      githubLink: 'https://github.com/username/join',
      liveLink: 'https://join-app.example.com'
    },
    {
      title: 'El Pollo Loco Game',
      description: 'Ein 2D Jump & Run Spiel mit HTML5 Canvas. Sammle Münzen, besiege Gegner und erreiche das Ziel in diesem unterhaltsamen Browser-Spiel.',
      image: '',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS', 'OOP'],
      githubLink: 'https://github.com/username/el-pollo-loco',
      liveLink: 'https://el-pollo-loco.example.com'
    },
    {
      title: 'Pokédex',
      description: 'Eine interaktive Pokédex-Anwendung, die die PokéAPI nutzt. Durchsuche, filtere und erkunde alle Pokémon mit detaillierten Informationen.',
      image: '',
      technologies: ['JavaScript', 'REST API', 'HTML', 'CSS', 'Bootstrap'],
      githubLink: 'https://github.com/username/pokedex',
      liveLink: 'https://pokedex.example.com'
    },
    {
      title: 'DA Bubble Chat',
      description: 'Eine moderne Chat-Anwendung für Teams. Mit Channels, Direct Messages, File Sharing und einer intuitiven Benutzeroberfläche.',
      image: '',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'RxJS', 'Material UI'],
      githubLink: 'https://github.com/username/da-bubble',
      liveLink: 'https://da-bubble.example.com'
    },
    {
      title: 'Portfolio Website',
      description: 'Meine persönliche Portfolio-Website, die Sie gerade besuchen. Responsive Design, moderne Animationen und optimale Performance.',
      image: '',
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      githubLink: 'https://github.com/username/portfolio',
      liveLink: 'https://portfolio.example.com'
    }
  ];
}
