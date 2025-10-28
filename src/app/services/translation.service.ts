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
                'My passion for programming arose from my curiosity about the rapid technological development in IT. I have been spending a lot of time on computers since my youth. As part of my career reorientation, software development was therefore like a "godsend" for me. Since then, I have been continuing my education in programming at the Developer Academy alongside my job and am currently implementing my first own projects.',
            'about.location':
                'I live in Raisting in the Alpine foothills of Bavaria. I prefer to work from home, but I am willing to work on-site for training purposes.',
            'about.inspiration':
                'I am particularly fascinated by the automation of processes, a topic that is becoming increasingly important in our time. Since I started programming, I have been working privately on an automated ventilation control system for the old building I live in.',
            'about.approach':
                'It gives me great pleasure to analyze processes and find ways to make them more efficient and simpler. I combine analytical thinking with creativity to develop a suitable and elegant solution for every problem. I see challenges as an opportunity to learn new things and further develop my skills. Through perseverance and collaboration with your team, I see us as a rising star in the tech industry.',

            // Skills Section
            'skills.title': 'My Skills',
            'skills.looking': 'Looking for',
            'skills.another': 'another skill?',
            'skills.getInTouch': 'Get in touch',

            // Portfolio Section
            'portfolio.title': 'Portfolio',
            'portfolio.description':
                'Here you can find some of my recent work and projects.',

            // Project Descriptions
            'project.join.description':
                'A task management app that helps teams organize and track projects. With drag & drop, user roles, and real-time updates.',
            'project.polloLoco.description':
                'A 2D jump & run game built with HTML5 Canvas. Collect coins, defeat enemies and reach the goal in this entertaining browser game.',
            'project.pokedex.description':
                'An interactive Pokédex application using the PokéAPI. Browse, filter, and explore all Pokémon with detailed information.',
            'project.daBubble.description':
                'A modern chat application for teams. Features channels, direct messages, file sharing, and an intuitive user interface.',
            'project.portfolio.description':
                'My personal portfolio website that you are currently visiting. Responsive design, modern animations, and optimal performance.',

            // Recommendations Section
            'recommendation.max.name': 'Max Mustermann',
            'recommendation.max.role': 'Project Manager at Tech Solutions',
            'recommendation.max.text':
                'I had the pleasure of working with Johannes on several projects. Their ability to solve complex problems and find innovative solutions is impressive. They bring not only technical know-how but also a positive attitude that motivates the entire team.',

            'recommendation.erika.name': 'Erika Musterfrau',
            'recommendation.erika.role': 'Senior Developer at Web Innovations',
            'recommendation.erika.text':
                'Johannes is an exceptional developer. Their knowledge of modern web technologies and commitment to clean, maintainable code is remarkable. They are always ready to share their knowledge and help others, making them a valuable team player.',

            'recommendation.john.name': 'John Doe',
            'recommendation.john.role': 'CTO at Creative Apps',
            'recommendation.john.text':
                'Working with Johannes was a great experience. Their ability to quickly learn new technologies and use them effectively has significantly advanced our project. They are detail-oriented and always strive to achieve the best possible results.',

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
            'legal.indemnificationSubText':
                'For any questions or notices, please contact me at <a class="link" href="">Johannes-nordmann&#64;live.de</a>.',
            'legal.indemnificationDate': 'September 30, 2025',

            // Privacy Policy
            'privacy.title': 'Privacy Policy',
            'privacy.overview': 'Data Protection Overview',
            'privacy.overviewText':
                'The following gives a simple overview of what happens to your personal information when you visit this website. Personal information is any data with which you could be personally identified.',

            'privacy.responsible':
                'Who is responsible for the data collection on this website?',
            'privacy.responsibleText':
                "The data collected on this website are processed by the website operator. The operator's contact details can be found in the website's required legal notice.",

            'privacy.dataCollection': 'How do we record your data?',
            'privacy.dataCollectionText':
                'Some data are collected when you provide it to us. This could, for example, be data you enter on a contact form. Other data are collected automatically or after you consent to its collection when you visit the website. This data are primarily technical data such as the browser and operating system you are using or when you accessed the page.',

            'privacy.dataUse': 'What do we use your data for?',
            'privacy.dataUseText':
                'Part of the data is collected to ensure the proper functioning of the website. Other data can be used to analyze how visitors use the site and to respond to your inquiries submitted through the contact form.',

            'privacy.dataRights':
                'What rights do you have regarding your data?',
            'privacy.dataRightsText':
                'You always have the right to request information about your stored data, its origin, its recipients, and the purpose of its collection at no charge. You also have the right to request that it be corrected or deleted.',

            'privacy.hosting': 'Hosting',
            'privacy.hostingTitle': 'External Hosting',
            'privacy.hostingText':
                "This website is hosted by an external service provider (hoster). Personal data collected on this website are stored on the hoster's servers. The hoster processes the data solely on our behalf and may not use it for its own purposes.",

            'privacy.contactForm': 'Contact Form',
            'privacy.contactFormTitle': 'Data transmitted via contact form',
            'privacy.contactFormText':
                'If you send us questions via the contact form, we will collect the data entered on the form, including the contact details you provide, to answer your question and any follow-up questions. We do not share this information without your permission.',
            'privacy.contactFormLegal':
                'The processing of data submitted in the contact form is based on your consent (Art. 6 (1) (a) GDPR). You may revoke your consent at any time. The data processed before we receive your request may still be legally processed.',
            'privacy.contactFormStorage':
                'The data you submit via the contact form will remain with us until you request us to delete it, revoke your consent for its storage, or the purpose for its storage no longer pertains.',

            'privacy.localStorage': 'Browser Data Storage',
            'privacy.localStorageTitle': 'Local Storage',
            'privacy.localStorageText':
                "This website uses browser local storage to save your language preference. This data is stored locally in your browser and is not transmitted to our servers. You can delete this data at any time by clearing your browser's local storage.",

            'privacy.rights': 'Your Rights',
            'privacy.rightsTitle':
                'Right to information, deletion, and correction',
            'privacy.rightsText':
                'You have the right to free information about your stored personal data, its origin and recipients, and the purpose of data processing at any time, as well as a right to correction or deletion of this data.',
            'privacy.rightsContact':
                'For this purpose, as well as for further questions about personal data, you can contact us at any time.',

            'privacy.complaint': 'Right to lodge a complaint',
            'privacy.complaintText':
                'If you believe that the processing of your personal data violates the GDPR, you have the right to lodge a complaint with a supervisory authority, in particular in the Member State of your habitual residence, place of work, or place of the alleged infringement.',

            'privacy.contact': 'Contact Information',
            'privacy.contactText':
                'If you have any questions about this privacy policy or data protection, please contact:',
            'privacy.contactDetails':
                'Johannes Nordmann<br>Pfarrer-Tremel-Weg 5<br>82399 Raisting<br>Email: johannes-nordmann&#64;live.de',

            'privacy.effectiveDate': 'Effective Date',
            'privacy.effectiveDateText':
                'This privacy policy is effective as of September 30, 2025.',

            // Common
            'common.backToPortfolio': 'Back to Home',
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
                'Meine Leidenschaft für das Programmieren entstand aus meiner Neugier für die rasante technische Entwicklung in der IT. Schon seit meiner Jugend verbringe ich viel Zeit am Computer. Im Rahmen meiner beruflichen Neuorientierung war die Softwareentwicklung daher wie ein „gefundenes Fressen“ für mich. Seitdem bilde ich mich berufsbegleitend bei der Developer Akademie im Programmieren weiter und setze aktuell meine ersten eigenen Projekte um.',
            'about.location':
                'Ich wohne in Raisting im Alpenvorland in Bayern. Vorzugsweise arbeite ich von Zuhause aus, jedoch bin ich bereit für die Einarbeitung vor Ort zu arbeiten.',
            'about.inspiration':
                'Mich fasziniert besonders die Automatisierung von Abläufen, ein Thema, das in unserer heutigen Zeit immer wichtiger wird. Seit ich mit dem Programmieren begonnen habe, arbeite ich privat an einer automatisierten Lüftungssteuerung für den Altbau, in dem ich wohne.',
            'about.approach':
                'Es bereitet mir große Freude, Prozesse zu analysieren und Wege zu finden, sie effizienter und einfacher zu gestalten. Dabei kombiniere ich analytisches Denken mit Kreativität, um für jedes Problem eine passende und elegante Lösung zu entwickeln. Herausforderungen sehe ich als Chance, Neues zu lernen und meine Fähigkeiten weiterzuentwickeln. Durch Ausdauer und Zusammenarbeit mit ihrem Team, sehe ich uns als aufgehender Stern in der Tech-Branche.',

            // Skills Section
            'skills.title': 'Meine Fähigkeiten',
            'skills.looking': 'Suchen Sie nach',
            'skills.another': 'einer anderen Fähigkeit?',
            'skills.getInTouch': 'Kontakt aufnehmen',

            // Portfolio Section
            'portfolio.title': 'Portfolio',
            'portfolio.description':
                'Hier finden Sie einige meiner neuesten Arbeiten und Projekte.',

            // Project Descriptions
            'project.join.description':
                'Eine Task-Management-App, die Teams dabei hilft, Projekte zu organisieren und zu verfolgen. Mit Drag & Drop, Benutzerrollen und Real-Time Updates.',
            'project.polloLoco.description':
                'Ein 2D Jump & Run Spiel mit HTML5 Canvas. Sammle Münzen, besiege Gegner und erreiche das Ziel in diesem unterhaltsamen Browser-Spiel.',
            'project.pokedex.description':
                'Eine interaktive Pokédex-Anwendung, die die PokéAPI nutzt. Durchsuche, filtere und erkunde alle Pokémon mit detaillierten Informationen.',
            'project.daBubble.description':
                'Eine moderne Chat-Anwendung für Teams. Mit Channels, Direct Messages, File Sharing und einer intuitiven Benutzeroberfläche.',
            'project.portfolio.description':
                'Meine persönliche Portfolio-Website, die Sie gerade besuchen. Responsive Design, moderne Animationen und optimale Performance.',

            // Recommendations Section
            'recommendation.max.name': 'Max Mustermann',
            'recommendation.max.role': 'Projektmanager bei Tech Solutions',
            'recommendation.max.text':
                'Ich hatte das Vergnügen, mit Johannes an mehreren Projekten zu arbeiten. Ihre Fähigkeit, komplexe Probleme zu lösen und innovative Lösungen zu finden, ist beeindruckend. Sie bringt nicht nur technisches Know-how mit, sondern auch eine positive Einstellung, die das gesamte Team motiviert.',

            'recommendation.erika.name': 'Erika Musterfrau',
            'recommendation.erika.role': 'Senior Developer bei Web Innovations',
            'recommendation.erika.text':
                'Johannes ist eine außergewöhnliche Entwicklerin. Ihre Kenntnisse in modernen Webtechnologien und ihr Engagement für sauberen, wartbaren Code sind bemerkenswert. Sie ist immer bereit, ihr Wissen zu teilen und anderen zu helfen, was sie zu einer wertvollen Teamplayerin macht.',

            'recommendation.john.name': 'John Doe',
            'recommendation.john.role': 'CTO bei Creative Apps',
            'recommendation.john.text':
                'Die Zusammenarbeit mit Johannes war eine großartige Erfahrung. Ihre Fähigkeit, sich schnell in neue Technologien einzuarbeiten und diese effektiv einzusetzen, hat unser Projekt maßgeblich vorangebracht. Sie ist detailorientiert und stets bestrebt, die bestmöglichen Ergebnisse zu erzielen.',

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
            'legal.indemnificationSubText':
                'Für Fragen oder Hinweise kontaktieren Sie uns bitte unter <a class="link" href="">Johannes-nordmann&#64;live.de</a>.',
            'legal.indemnificationDate': 'September 30, 2025',

            // Privacy Policy
            'privacy.title': 'Datenschutzerklärung',
            'privacy.overview': 'Datenschutz auf einen Blick',
            'privacy.overviewText':
                'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',

            'privacy.responsible':
                'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
            'privacy.responsibleText':
                'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.',

            'privacy.dataCollection': 'Wie erfassen wir Ihre Daten?',
            'privacy.dataCollectionText':
                'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).',

            'privacy.dataUse': 'Wofür nutzen wir Ihre Daten?',
            'privacy.dataUseText':
                'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden und zur Beantwortung Ihrer über das Kontaktformular gesendeten Anfragen.',

            'privacy.dataRights':
                'Welche Rechte haben Sie bezüglich Ihrer Daten?',
            'privacy.dataRightsText':
                'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.',

            'privacy.hosting': 'Hosting',
            'privacy.hostingTitle': 'Externes Hosting',
            'privacy.hostingText':
                'Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Der Hoster verarbeitet die Daten ausschließlich in unserem Auftrag und darf sie nicht für eigene Zwecke verwenden.',

            'privacy.contactForm': 'Kontaktformular',
            'privacy.contactFormTitle': 'Datenübertragung bei Kontaktaufnahme',
            'privacy.contactFormText':
                'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
            'privacy.contactFormLegal':
                'Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können diese Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.',
            'privacy.contactFormStorage':
                'Die von Ihnen über das Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt.',

            'privacy.localStorage': 'Browser-Datenspeicherung',
            'privacy.localStorageTitle': 'Local Storage',
            'privacy.localStorageText':
                'Diese Website verwendet den Local Storage des Browsers, um Ihre Spracheinstellung zu speichern. Diese Daten werden lokal in Ihrem Browser gespeichert und nicht an unsere Server übertragen. Sie können diese Daten jederzeit löschen, indem Sie den Local Storage Ihres Browsers leeren.',

            'privacy.rights': 'Ihre Rechte',
            'privacy.rightsTitle':
                'Recht auf Auskunft, Löschung und Berichtigung',
            'privacy.rightsText':
                'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.',
            'privacy.rightsContact':
                'Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.',

            'privacy.complaint': 'Recht auf Beschwerde',
            'privacy.complaintText':
                'Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt, haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.',

            'privacy.contact': 'Kontaktinformationen',
            'privacy.contactText':
                'Bei Fragen zu dieser Datenschutzerklärung oder zum Datenschutz wenden Sie sich bitte an:',
            'privacy.contactDetails':
                'Johannes Nordmann<br>Pfarrer-Tremel-Weg 5<br>82399 Raisting<br>E-Mail: johannes-nordmann&#64;live.de',

            'privacy.effectiveDate': 'Gültigkeitsdatum',
            'privacy.effectiveDateText':
                'Diese Datenschutzerklärung ist gültig ab dem 30. September 2025.',

            // Common
            'common.backToPortfolio': 'Zurück zur Startseite',
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
