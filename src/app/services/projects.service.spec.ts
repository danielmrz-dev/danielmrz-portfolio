import { TestBed } from "@angular/core/testing";
import { ProjectsService } from "./projects.service";
import { HttpErrorResponse, provideHttpClient } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { ProjectsList } from "../models/projects-list.type";

const mockProjetos: ProjectsList = [
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
const apiLink = "https://danielmrz-portfolio-backend-production.up.railway.app/projetos";

describe(ProjectsService.name, () => {

    let service: ProjectsService;
    let prot = ProjectsService.prototype;
    let httpController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ProjectsService,
                provideHttpClient(),
                provideHttpClientTesting(),
            ]
        })
        service = TestBed.inject(ProjectsService);
        httpController = TestBed.inject(HttpTestingController)
    })

    afterEach(() => {
        httpController.verify();
    })

    it('should create', () => {
        expect(service).not.toBeNull();
    });

    describe(`#${prot.getProjects.name}()`, () => {
        it('should return the list of projects', () => {
            service.getProjects().subscribe((projetos) => {
                expect(projetos).toEqual(mockProjetos);
            });
            const req = httpController.expectOne(apiLink);
            expect(req.request.method).toBe("GET");
            req.flush(mockProjetos);
        });

        it('should perform a http request every time the method is called', () => {
            service.getProjects().subscribe();
            service.getProjects().subscribe();
            const reqs = httpController.match(apiLink);
            expect(reqs.length).toBe(2);
        });

        it('should return an empty list when there is no projects on the list', () => {
            service.getProjects().subscribe((projetos) => {
                expect(projetos.length).toBe(0);
            })
            const req = httpController.expectOne(apiLink);
            req.flush([]);
        });

        it('should return an error when the request fails', () => {
            service.getProjects().subscribe({
                next: () => {
                    fail("Falhando propositamnete para efeitos de teste.");
                },
                error: (error: HttpErrorResponse) => {
                    expect(error.status).toBe(422);
                }
            })

            const req = httpController.expectOne(apiLink);
            req.flush("Erro", { status: 422, statusText: "Erro simulado" });
        });
        
        
        
        
    });
});
