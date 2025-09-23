import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export interface Translation {
    [key: string]: string;
}

@Injectable({
    providedIn: 'root',
})
export class TranslationService {
    private currentLanguage = new BehaviorSubject<string>('en');
    public currentLanguage$ = this.currentLanguage.asObservable();
    private isBrowser: boolean;

    private translations: { [lang: string]: Translation } = {
        en: {
            // Navigation
            'nav.about': 'About me',
            'nav.skills': 'My skills',
            'nav.portfolio': 'Portfolio',
            'nav.contact': 'Contact',

            // Hero Section
            'hero.greeting': 'I am',
            'hero.name': 'Your Name',
            'hero.title': 'Frontend Developer',
            'hero.cta': "Let's talk!",
            'hero.scroll': 'Scroll down',

            // About Section
            'about.title': 'About me',
            'about.description':
                "I'm a passionate web developer with a knack for creating dynamic and responsive web applications. My journey in tech started with a curiosity for how things work, and it has evolved into a full-fledged career where I get to solve real-world problems through code.",
            'about.location':
                'Where are you located? Are you open to different ways of working, such as working remotely or even relocating?',
            'about.inspiration':
                'What inspires your work? Are there any particular technologies or methodologies that you are passionate about?',
            'about.approach':
                'A brief description of your problem-solving approach. Do you learn from each challenge as you search for the most efficient or elegant solution? You can include some keywords like: analytical thinking, creativity, persistence and collaboration.',

            // Skills Section
            'skills.title': 'My Skills',
            'skills.description':
                'Show that you have used a variety of front-end technologies in your projects',
            'skills.looking': 'Looking for',
            'skills.another': 'another skill?',
            'skills.enthusiasm':
                'Reveal enthusiasm for learning new technologies and frameworks',
            'skills.getInTouch': 'Get in touch',

            // Portfolio Section
            'portfolio.title': 'Portfolio',
            'portfolio.description':
                'Here you can find some of my recent work and projects.',

            // Contact Section
            'contact.title': 'Contact',
            'contact.problem': 'Got a problem to solve?',
            'contact.description':
                'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
            'contact.need': 'Need a Frontend Developer? Contact me!',
            'contact.name': 'Your name',
            'contact.email': 'Your email',
            'contact.message': 'Your message',
            'contact.privacy1': 'I have read the',
            'contact.privacyLink': 'privacy policy',
            'contact.privacy2':
                'and agree to the processing of my personal data as outlined.',
            'contact.send': 'Send Message',
            'contact.error.name': 'Please enter a name',
            'contact.error.email': 'Please enter an email address',
            'contact.error.emailPattern':
                'Please enter a valid email address format',
            'contact.error.message':
                'Please enter a message (minimum 3 characters)',

            // Footer
            'footer.imprint': 'Imprint',
            'footer.privacy': 'Privacy Policy',
        },
        de: {
            // Navigation
            'nav.about': 'Über mich',
            'nav.skills': 'Meine Fähigkeiten',
            'nav.portfolio': 'Portfolio',
            'nav.contact': 'Kontakt',

            // Hero Section
            'hero.greeting': 'Ich bin',
            'hero.name': 'Ihr Name',
            'hero.title': 'Frontend Entwickler',
            'hero.cta': 'Lass uns reden!',
            'hero.scroll': 'Nach unten scrollen',

            // About Section
            'about.title': 'Über mich',
            'about.description':
                'Ich bin ein leidenschaftlicher Webentwickler mit einem Händchen für die Erstellung dynamischer und responsiver Webanwendungen. Meine Reise in der Technik begann mit der Neugier darauf, wie Dinge funktionieren, und hat sich zu einer vollwertigen Karriere entwickelt, in der ich echte Probleme durch Code lösen kann.',
            'about.location':
                'Wo befinden Sie sich? Sind Sie offen für verschiedene Arbeitsweisen, wie z.B. Remote-Arbeit oder sogar Umzug?',
            'about.inspiration':
                'Was inspiriert Ihre Arbeit? Gibt es bestimmte Technologien oder Methoden, für die Sie sich begeistern?',
            'about.approach':
                'Eine kurze Beschreibung Ihres Problemlösungsansatzes. Lernen Sie aus jeder Herausforderung, während Sie nach der effizientesten oder elegantesten Lösung suchen? Sie können einige Schlüsselwörter wie: analytisches Denken, Kreativität, Ausdauer und Zusammenarbeit einschließen.',

            // Skills Section
            'skills.title': 'Meine Fähigkeiten',
            'skills.description':
                'Zeigen Sie, dass Sie eine Vielzahl von Frontend-Technologien in Ihren Projekten verwendet haben',
            'skills.looking': 'Suchen Sie nach',
            'skills.another': 'einer anderen Fähigkeit?',
            'skills.enthusiasm':
                'Zeigen Sie Begeisterung für das Erlernen neuer Technologien und Frameworks',
            'skills.getInTouch': 'Kontakt aufnehmen',

            // Portfolio Section
            'portfolio.title': 'Portfolio',
            'portfolio.description':
                'Hier finden Sie einige meiner neuesten Arbeiten und Projekte.',

            // Contact Section
            'contact.title': 'Kontakt',
            'contact.problem': 'Haben Sie ein Problem zu lösen?',
            'contact.description':
                'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.',
            'contact.need':
                'Brauchen Sie einen Frontend Entwickler? Kontaktieren Sie mich!',
            'contact.name': 'Ihr Name',
            'contact.email': 'Ihre E-Mail',
            'contact.message': 'Ihre Nachricht',
            'contact.privacy1': 'Ich habe die',
            'contact.privacyLink': 'Datenschutzerklärung',
            'contact.privacy2':
                'gelesen und stimme der Verarbeitung meiner persönlichen Daten wie beschrieben zu.',
            'contact.send': 'Nachricht senden',
            'contact.error.name': 'Bitte geben Sie einen Namen ein',
            'contact.error.email': 'Bitte geben Sie eine E-Mail-Adresse ein',
            'contact.error.emailPattern':
                'Bitte geben Sie ein gültiges E-Mail-Format ein',
            'contact.error.message':
                'Bitte geben Sie eine Nachricht ein (mindestens 3 Zeichen)',

            // Footer
            'footer.imprint': 'Impressum',
            'footer.privacy': 'Datenschutzerklärung',
        },
    };

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);

        // Load saved language from localStorage only in browser
        if (this.isBrowser) {
            const savedLang = localStorage.getItem('language');
            if (savedLang && this.translations[savedLang]) {
                this.currentLanguage.next(savedLang);
            }
        }
    }

    getCurrentLanguage(): string {
        return this.currentLanguage.value;
    }

    setLanguage(lang: string): void {
        if (this.translations[lang]) {
            this.currentLanguage.next(lang);
            // Only use localStorage in browser
            if (this.isBrowser) {
                localStorage.setItem('language', lang);
            }
        }
    }

    translate(key: string): string {
        const lang = this.getCurrentLanguage();
        return this.translations[lang][key] || key;
    }
}
