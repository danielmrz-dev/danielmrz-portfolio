import { ProjectsList } from "../../models/projects-list.type";

export const apiLink = "https://danielmrz-portfolio-backend-production.up.railway.app/projetos";
export const mockProjetos: ProjectsList = [
    {
        images: {
            small: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/blitjo9cbnmtbaybeiys.jpg",
            large: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/blitjo9cbnmtbaybeiys.jpg"
        },
        name: "Designo Multi-Page Website",
        technologies: [
            "angular",
            "angular material",
            "sass",
            "typescript",
            "rxjs"
        ],
        repository: "https://github.com/danielmrz-dev/designo-website",
        liveSite: "https://designo-website-jet.vercel.app"
    },
]
