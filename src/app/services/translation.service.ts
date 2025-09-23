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
            'footer.imprint': 'Legal Notice',
            'footer.privacy': 'Privacy Policy',

            // Legal Notice
            'legal.title': 'Legal Notice',
            'legal.responsibility': 'Imprint',
            'legal.contact': 'Contact Information',
            'legal.terms': 'Acceptance of terms',
            'legal.termsText':
                'By accessing and using <a class="link" href="/" routerLink="/">Portfolio</a> (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.',
            'legal.ownership': 'Scope and ownership of the product',
            'legal.ownershipText':
                '<a class="link" href="/" routerLink="/">Portfolio</a> has been developed as part of a student project in a web development bootcamp at the <a class="link" href="https://developerakademie.com/">Developer Akademie GmbH</a>. It has an educational purpose and is not intended for extensive personal & business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product. The design of <a class="link" href="/" routerLink="/">Portfolio</a> is owned by the <a class="link" href="https://developerakademie.com/">Developer Akademie GmbH</a>. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.',
            'legal.rights': 'Proprietary rights',
            'legal.rightsText':
                'Aside from the design owned by <a class="link" href="https://developerakademie.com/">Developer Akademie GmbH</a>, we, the listed students, retain all proprietary rights in <a class="link" href="/" routerLink="/">Portfolio</a>, including any associated copyrighted material, trademarks, and other proprietary information.',
            'legal.productuse': 'Use of the product',
            'legal.productuseText':
                '<a class="link" href="/" routerLink="/">Portfolio</a> is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of <a class="link" href="/" routerLink="/">Portfolio</a> for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of <a class="link" href="/" routerLink="/">Portfolio</a>.',
            'legal.disclaimer':
                'Disclaimer of warranties and limitation of liability',
            'legal.disclaimerText':
                '<a class="link" href="/" routerLink="/">Portfolio</a> is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the <a class="link" href="https://developerakademie.com/">Developer Akademie GmbH</a>, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of <a class="link" href="/" routerLink="/">Portfolio</a>.',
            'legal.indemnification': 'Indemnity',
            'legal.indemnificationText':
                'You agree to indemnify, defend and hold harmless us, the listed students, the <a class="link" href="https://developerakademie.com/">Developer Akademie GmbH</a>, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of <a class="link" href="/" routerLink="/">Portfolio</a> and/or your breach of this Legal Notice.',
            'legal.indemnificationSubText': 'For any questions or notices, please contact me at <a class="link" href="">Johannes-nordmann&#64;live.de</a>.',
            'legal.indemnificationDate': 'September 30, 2025',
            
            // Privacy Policy
            'privacy.title': 'Privacy Policy',
            'privacy.overview': 'Overview',
            'privacy.overviewText':
                'This privacy policy will explain how our organization uses the personal data we collect from you when you use our website.',
            'privacy.dataCollection': 'What data do we collect?',
            'privacy.dataCollectionText':
                'We collect the following data: Personal identification information (Name, email address, etc.) when you voluntarily submit this information through our contact forms.',
            'privacy.dataUse': 'How do we use your data?',
            'privacy.dataUseText':
                'We use the data to respond to your inquiries and to improve our website. We do not share your personal data with third parties unless required by law.',
            'privacy.dataStorage': 'How do we store your data?',
            'privacy.dataStorageText':
                'Your data is securely stored and we will keep your contact information until you request its deletion.',
            'privacy.contact': 'Contact Information',
            'privacy.contactText':
                'If you have any questions about this privacy policy, please contact us.',

            // Common
            'common.backToPortfolio': 'Back to Portfolio',
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

            // Legal Notice
            'legal.title': 'Impressum',
            'legal.responsibility': 'Haftungshinweis',
            'legal.contact': 'Kontaktinformationen',
            'legal.terms': 'Akzeptanz der Bedingungen',
            'legal.termsText':
                'Durch den Zugriff auf und die Nutzung von <a class="link" href="/" routerLink="/">Portfolio</a> (Produkt) erkennen Sie die folgenden Bedingungen und Konditionen sowie alle Richtlinien, Leitlinien oder Änderungen, die Ihnen von Zeit zu Zeit präsentiert werden können, an und stimmen diesen zu. Wir, die aufgeführten Studenten, können die Bedingungen und Konditionen von Zeit zu Zeit ohne vorherige Ankündigung aktualisieren oder ändern.',
            'legal.ownership': 'Umfang und Eigentum des Produkts',
            'legal.ownershipText':
                '<a class="link" href="/" routerLink="/">Portfolio</a> wurde im Rahmen eines studentischen Projekts in einem Webentwicklungs-Bootcamp der <a class="link" href="https://developerakademie.com/">Developer Akademie GmbH</a> entwickelt. Es hat einen Bildungszweck und ist nicht für umfangreiche persönliche und geschäftliche Nutzung gedacht. Daher können wir keine konsistente Verfügbarkeit, Zuverlässigkeit, Genauigkeit oder einen anderen Aspekt der Qualität dieses Produkts garantieren. Das Design von <a class="link" href="/" routerLink="/">Portfolio</a> gehört der <a class="link" href="https://developerakademie.com/">Developer Akademie GmbH</a>. Die unbefugte Nutzung, Vervielfältigung, Modifikation, Verteilung oder Replikation des Designs ist strengstens untersagt.',
            'legal.rights': 'Eigentumsrechte',
            'legal.rightsText':
                'Abgesehen von dem Design, das der <a class="link" href="https://developerakademie.com/">Developer Akademie GmbH</a> gehört, behalten wir, die aufgeführten Studenten, alle Eigentumsrechte an <a class="link" href="/" routerLink="/">Portfolio</a>, einschließlich aller damit verbundenen urheberrechtlich geschützten Materialien, Marken und anderer proprietärer Informationen.',
            'legal.productuse': 'Nutzung des Produkts',
            'legal.productuseText':
                '<a class="link" href="/" routerLink="/">Portfolio</a> darf ausschließlich für rechtmäßige Zwecke und in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften verwendet werden. Jegliche Nutzung von <a class="link" href="/" routerLink="/">Portfolio</a> für illegale Aktivitäten oder um andere Personen zu belästigen, zu schädigen, zu bedrohen oder einzuschüchtern, ist strengstens untersagt. Sie sind allein verantwortlich für Ihre Interaktionen mit anderen Nutzern von <a class="link" href="/" routerLink="/">Portfolio</a>.',
            'legal.disclaimer': 'Haftungsausschluss und Begrenzung der Haftung',
            'legal.disclaimerText':
                '<a class="link" href="/" routerLink="/">Portfolio</a> wird "wie besehen" ohne jegliche Gewährleistung bereitgestellt, weder ausdrücklich noch stillschweigend, einschließlich, aber nicht beschränkt auf die stillschweigenden Garantien der Marktgängigkeit, Eignung für einen bestimmten Zweck und Nichtverletzung. In keinem Fall haften wir, die aufgeführten Studenten, oder die <a class="link" href="https://developerakademie.com/">Developer Akademie GmbH</a> für direkte, indirekte, zufällige, besondere, Folgeschäden oder exemplarische Schäden, einschließlich, aber nicht beschränkt auf Schäden für entgangenen Gewinn, Goodwill, Nutzung, Daten oder andere immaterielle Verluste, selbst wenn wir auf die Möglichkeit solcher Schäden hingewiesen wurden, die sich aus der Nutzung oder Leistung von <a class="link" href="/" routerLink="/">Portfolio</a> ergeben.',
            'legal.indemnification': 'Freistellung',
            'legal.indemnificationText':
                'Sie erklären sich damit einverstanden, uns, die aufgeführten Studenten, die <a class="link" href="https://developerakademie.com/">Developer Akademie GmbH</a> sowie unsere verbundenen Unternehmen, Partner, Geschäftsführer, Direktoren, Vertreter und Mitarbeiter von jeglichen Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder Haftungen (einschließlich angemessener Anwaltskosten), die sich aus Ihrer Nutzung von <a class="link" href="/" routerLink="/">Portfolio</a> und/oder Ihrem Verstoß gegen diesen rechtlichen Hinweis ergeben, schadlos zu halten, zu verteidigen und freizustellen. Datum: 26. Juli 2025',
            'legal.indemnificationSubText': 'Für Fragen oder Hinweise kontaktieren Sie uns bitte unter <a class="link" href="">Johannes-nordmann&#64;live.de</a>.',
            'legal.indemnificationDate': 'September 30, 2025',
            
            // Privacy Policy
            'privacy.title': 'Datenschutzerklärung',
            'privacy.overview': 'Überblick',
            'privacy.overviewText':
                'Diese Datenschutzerklärung erklärt, wie unsere Organisation die personenbezogenen Daten verwendet, die wir von Ihnen sammeln, wenn Sie unsere Website nutzen.',
            'privacy.dataCollection': 'Welche Daten sammeln wir?',
            'privacy.dataCollectionText':
                'Wir sammeln folgende Daten: Persönliche Identifikationsinformationen (Name, E-Mail-Adresse, etc.), wenn Sie diese Informationen freiwillig über unsere Kontaktformulare übermitteln.',
            'privacy.dataUse': 'Wie verwenden wir Ihre Daten?',
            'privacy.dataUseText':
                'Wir verwenden die Daten, um auf Ihre Anfragen zu antworten und unsere Website zu verbessern. Wir geben Ihre persönlichen Daten nicht an Dritte weiter, es sei denn, dies ist gesetzlich vorgeschrieben.',
            'privacy.dataStorage': 'Wie speichern wir Ihre Daten?',
            'privacy.dataStorageText':
                'Ihre Daten werden sicher gespeichert und wir bewahren Ihre Kontaktinformationen auf, bis Sie deren Löschung beantragen.',
            'privacy.contact': 'Kontaktinformationen',
            'privacy.contactText':
                'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte.',

            // Common
            'common.backToPortfolio': 'Zurück zum Portfolio',
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
