import Separator from './Separator';
import { usePreferencesStore } from '../stores/usePreferencesStore';
import {
  TitleClassName,
  TextClassName,
  LinkClassName,
} from '../types/classNameThemeTypes';
import '../styles/app.css';
import '../styles/app-light.css';
import '../styles/app-dark.css';

const Projects = () => {
  const { theme, language } = usePreferencesStore();

  const titleClassName: TitleClassName = `title title-${theme}`;
  const textClassName: TextClassName = `text text-${theme}`;
  const linkClassName: LinkClassName = `link link-${theme}`;

  const projects = [
    {
      id: 1,
      symbol: '┌',
      description:
        language === 'french'
          ? `Un portfolio pour les développeurs fait avec React, Typescript, HTML, Sass et Vite.`
          : `A portfolio for developers made with React, Typescript, HTML, Sass and Vite.`,
      repoURL: 'https://github.com/souli-a/portfolio-developer',
      liveURL: 'https://souli-a-portfolio-developer.vercel.app',
    },
    {
      id: 2,
      symbol: '├',
      description:
        language === 'french'
          ? `Un portfolio pour les photographes fait avec Typescript, HTML, CSS, GSAP et Vite.`
          : `A portfolio for photographers made with Typescript, HTML, CSS, GSAP and Vite.`,
      repoURL: 'https://github.com/souli-a/portfolio-photographer',
      liveURL: 'https://souli-a-portfolio-photographer.vercel.app',
    },
    {
      id: 3,
      symbol: '├',
      description:
        language === 'french'
          ? `Ce portfolio, fait avec React, Typescript, HTML, CSS et Vite.`
          : `This portfolio, made with React, Typescript, HTML, CSS and Vite.`,
      repoURL: 'https://github.com/souli-a/portfolio-current',
      liveURL: 'https://soulimane.vercel.app',
    },
    {
      id: 4,
      symbol: '├',
      description:
        language === 'french'
          ? `Un site pour obtenir l'heure et la date d'une ville avec le format d'une langue en particulier. Fait avec React, TypeScript, HTML, CSS et Vite.`
          : `A website to get the time and date of a city with the format of a particular language. Built with React, TypeScript, HTML, CSS and Vite.`,
      repoURL: 'https://github.com/souli-a/city-time-app',
      liveURL: 'https://souli-a-city-time-app.vercel.app',
    },
    {
      id: 5,
      symbol: '└',
      description:
        language === 'french'
          ? `Un environnement de bureau personnalisé sous Linux avec une configuration de Neovim pour le développement web.`
          : `A customized Linux DE with a Neovim configuration for web development.`,
      repoURL: 'https://github.com/souli-a/dotfiles',
      liveURL:
        'https://raw.githubusercontent.com/souli-a/dotfiles/main/preview.png',
    },
  ];

  return (
    <section className="projects">
      <h1 className={titleClassName}>0.2</h1>
      <div className="projects-elements">
        {projects.map((project) => (
          <div key={project.id} className={`project project-${project.id}`}>
            <div className="project-informations">
              <span className={textClassName}>{project.symbol}</span>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={project.liveURL}
                className={linkClassName}
              >
                Live
              </a>
              <Separator />
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={project.repoURL}
                className={linkClassName}
              >
                Repo
              </a>
              <Separator />
            </div>
            <p className={textClassName}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
