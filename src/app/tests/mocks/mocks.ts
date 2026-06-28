import { ProjectsList } from '../../models/projects-list.type';

export const apiLink =
  'https://danielmrz-portfolio-backend-production.up.railway.app/projetos';
export const mockProjetos: ProjectsList = [
  {
    name: 'Designo Multi-Page Website',
    image:
      'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/blitjo9cbnmtbaybeiys.jpg',
    technologies: ['angular', 'angular material', 'sass', 'typescript', 'rxjs'],
    repositoryLink: 'https://github.com/danielmrz-dev/designo-website',
    liveSiteLink: 'https://designo-website-jet.vercel.app',
  },
];
