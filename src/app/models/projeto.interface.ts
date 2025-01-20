export interface IProjeto {
    name: string;
    images: {
        small: string;
        large: string;
    }
    technologies: string[];
    liveSite: string;
    repository: string;
}